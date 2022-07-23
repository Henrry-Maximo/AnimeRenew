import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import api from "../../service/api.js";

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
    <div className="structure">
      <Form className="positionCenter">
        <Form>
          <h1 style={{ color: "black", marginTop: 5 }} className="colorTitle">
            Cadastro
          </h1>
          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ margin: 40, marginTop: 0 }}
          >
            <Form.Label style={{ marginRight: 235 }}>Usuário:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite aqui"
              required
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicEmail"
            style={{ margin: 40, marginTop: 0 }}
          >
            <Form.Label style={{ marginRight: 250 }}>Email:</Form.Label>
            <Form.Control
              type="Email"
              placeholder="Digite aqui"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPassword"
            style={{ margin: 40, marginTop: 0 }}
          >
            <Form.Label style={{ marginRight: 245 }}>Senha:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite aqui"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="outline-danger"
            type="submit"
            style={{ margin: 10 }}
            onClick={CreateUser}
          >
            Criar Conta{" "}
          </Button>
        </Form>
      </Form>
    </div>
  );
}

export default Index;
