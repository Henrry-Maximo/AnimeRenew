// padrão:
import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./registro-styles.module.css";
// ---------------------------------------------

// conexão ao backend:
import api from "../../service/api.js";
// ---------------------------------------------

function Index() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function CreateUser() {
    try {
      const data = {
        usuario,
        email,
        password,
      };
      await api.post("/user", data);

      alert(`Usuário ${usuario} cadastrado com sucesso`);
    } catch (err) {
      alert(`Houve um erro: ${err}`);
    }
  }

  return (
    <div className={styles.container}>
      <Form className={styles.containerForm}>
        <h1>
          AnimeRe:new
        </h1>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label className={styles.titlePosition}>USUÁRIO:</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            required
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"

        >
          <Form.Label className={styles.titlePosition}>E-MAIL:</Form.Label>
          <Form.Control
            type="Email"
            placeholder=""
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"

        >
          <Form.Label className={styles.titlePosition}>SENHA:</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          className={styles.button24}
          type="submit"
          onClick={CreateUser}
        >
          CRIAR CONTA{" "}
        </Button>
      </Form>
    </div>
  );
}

export default Index;
