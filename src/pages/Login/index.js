// importação padrão do react + componentes bootstrap
import React from "react";
import { Button, Form } from "react-bootstrap";
//  -----------------------------------------------

// biblioteca utilizada para navegação entre páginas
import { Link } from "react-router-dom";
//  -----------------------------------------------

// estilização page login
import styles from "./login-styles.module.css";
//  -----------------------------------------------


function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <Form>
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
              required />
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
            />
          </Form.Group>

          <Button
            id={styles.button23}
            type="submit"
          >
            ENTRAR
          </Button>

          <Link to="/Registration" className={styles.rightRegistration}>
            REGISTRE-SE
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Index;
