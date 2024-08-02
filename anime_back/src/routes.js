import express from "express";
import user from "./controllers/userController.js";
import gender from "./controllers/genderController.js";
import login from "./controllers/loginController.js";
import { verifyJWT } from "../middlewares/jwt.js";

const router = express.Router();

// redirecionar os dados para a Controller
router.use("/user", user);
router.use("/login", login);
router.use("/gender", gender);
// use (genérico) = mandar direfentes tipos de requisição

export default router;
