import express, { request, response } from "express";
import db from "../services/genderService.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post("/", [body("gender")], async (request, response) => {
  const { gender } = request.body;

  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }

  try {
    await db.insertGender(gender);
    response.status(201).json({ message: "Gênero inserido com sucesso!" });
  } catch (err) {
    response.status(500).json({ message: `Encontramos um erro: ${err}` });
  }
});

router.get('/', async (request, response) => {
  try {
    const results = await db.findGender();

    if(results.length == 0) {
      response.status(204).end();
    } else {
      response.status(200).json(results)
    }
  } catch(err) {
    response.status(500).json({message: `Encontramos um erro: ${err}`});
  }
});

router.put('/', async(request, response) => {
  const {gender, idGender} = request.body;
  try {
    await db.updataGender(gender, idGender);
    response.status(200).json({message: `Genero atualizado com sucesso.`});
  }catch(err) {
    response.status(500).json({message: `Houve um erro. Erro${err}`});
  }
})

router.delete('/:idGender', async(request, response) => {
  const {idGender} = request.params;
  try {
  db.deleteGender(idGender);
  response.status(200).json({ message: 'Item excluido com sucesso!' })
  } catch (err) {
    response.status(500).json({ message: `Houve um erro: ${err}`});
  }
});

export default router;
