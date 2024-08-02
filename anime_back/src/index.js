//const express1 = requered('express') - estilo antigo de importar e utilizar

// esse tipo de importação requer uma inserção no package.json - "type": "module",
import express from "express";
import routes from "./routes.js";
import cors from "cors";

const api = express();

// validação de configuração
api.use(cors());
api.use(express.json());

// direcionar as informações para routes
api.use("/", routes);

// porta da aplicação
api.listen("3333", () => {
  console.log("Server is Running...");
});
