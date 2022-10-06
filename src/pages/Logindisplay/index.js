import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./stylelogin.css";

function Index() {
  return (
    <div className="structure">
      <div>
        <Form className="positionCenter">
          <h1 className="colorTitle" style={{ marginTop: 20 }}>
            Bem-vindo!
          </h1>
          <Form className="position_inla">
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              style={{ margin: 40, marginTop: 0 }}
            >
              <Form.Label style={{ marginRight: 210 }}>Usuário:</Form.Label>
              <Form.Control type="text" placeholder="Digite aqui" required />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              style={{ margin: 40, marginTop: 0 }}
            >
              <Form.Label style={{ marginRight: 220 }}>Senha:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite aqui"
                required
              />
            </Form.Group>

            <Button
              variant="outline-danger"
              type="submit"
              className="position_inla"
            >
              Entrar{" "}
            </Button>
          </Form>

          <Link to="/Registration" className="link-menu">
            Criar Conta
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Index;
