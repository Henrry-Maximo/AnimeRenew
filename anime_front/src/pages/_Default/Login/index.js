import { Button, Form, NavLink } from "react-bootstrap";
import "./styles.module.css";
import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <div>
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src="/chinsaw-man.mp4" type="video/mp4" />
        </video>
      </div>

      <Form>
        <h1
          style={{
            padding: "1rem",
            borderRadius: "0.2rem",
            fontWeight: "lighter",
          }}
        >
          <span
            style={{
              padding: "0.2rem",
              background: "#e1bee7",
              borderRadius: "0.1rem",
              color: "#4b0082", // Texto do span
              fontWeight: "bold",
            }}
          >
            My Best
          </span>{" "}
          ANIME
        </h1>

        <Form.Group className="mb-3 pt-4" controlId="form">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            id="email"
            placeholder="Your email here..."
            required
          />

          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            id="password"
            placeholder="Your password here..."
            required
          />

          <Form.Check
            type="checkbox"
            id="checkbox"
            label="Aceito os termos de serviço."
            required
          />
          <Form.Switch id="switch1" label="Entrar automaticamente." />
        </Form.Group>

        <Button type="submit">Sign Up</Button>

        <NavLink href="/register">Register</NavLink>

        <Link  className="right-registration">
          Register
        </Link>
      </Form>
    </div>
  );
}
