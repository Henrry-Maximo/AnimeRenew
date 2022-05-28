import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function index() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mundo dos Animes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="link-menu">
                {" "}
                Animes{" "}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Secondaryone" className="link-menu">
                {" "}
                Mangás{" "}
              </Link>
            </Nav.Link>
            <NavDropdown title="Gêneros" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Ação</NavDropdown.Item>
              <NavDropdown.Item href="">Artes Marciais</NavDropdown.Item>
              <NavDropdown.Item href="">Comédia</NavDropdown.Item>
              <NavDropdown.Item href="">Demônios</NavDropdown.Item>
              <NavDropdown.Item href="">Drama</NavDropdown.Item>
              <NavDropdown.Item href="">Espaço</NavDropdown.Item>
              <NavDropdown.Item href="">Esporte</NavDropdown.Item>
              <NavDropdown.Item href="">Fantasia</NavDropdown.Item>
              <NavDropdown.Item href="">Ficção Científica</NavDropdown.Item>
              <NavDropdown.Item href="">Harém</NavDropdown.Item>
              <NavDropdown.Item href="">Horror</NavDropdown.Item>
              <NavDropdown.Item href="">Jogos</NavDropdown.Item>
              <NavDropdown.Item href="">Josei</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Figure">Wallpapers</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link
                to="/Logindisplay"
                style={{
                  marginLeft: 470,
                  textDecoration: "none",
                  color: "gray",
                }}
              >
                {" "}
                Login{" "}
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default index;

/* rfce - estrutura pronta*/
