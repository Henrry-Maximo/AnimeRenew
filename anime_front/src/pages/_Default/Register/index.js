import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./register.module.css";

import { server } from "../../../http/index.js";

export function Register() {
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
      await server.post("/user", data);

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
          id={styles.buttonForRegistration}
          type="submit"
          onClick={CreateUser}
        >
          CRIAR CONTA{" "}
        </Button>
      </Form>
    </div>
  );
}
