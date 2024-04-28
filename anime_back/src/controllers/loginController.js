import express from "express";
import db from "../services/loginService.js";
import { generateToken } from "../../helpers/userfeatures.js";

const router = express.Router();

router.post("/", async (request, response) => {
  const [email, senha] = request.body;

  try {
    const results = await db.login(email, senha);

    if (results.length == 0) {
      response.status(401).json({ message: "Login ou senha invalidos" });
    } else {
      const { id_login, user_name } = results[0];
      const token = generateToken(id_login, user_name);
      response.status(200).json({ message: "Login efetuado com sucesso" });
    }
  } catch (err) {
    response.status(500).json({ message: `Encontramos um erro: ${err}` });
  }
});

export default router;
