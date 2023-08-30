import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function index() {
  return (
    <Navbar bg="black" expand="lg">
      <Container>
        <div>
          <img
            src="https://pa1.narvii.com/6408/cc8013ff9129ca7f71bc4a0f7f0fc85d71979773_hq.gif"
            style={{ width: 25 }}
          ></img>
        </div>
        <Navbar.Brand style={{ color: "gray" }}>MANGÁ AMIGO</Navbar.Brand>
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
            <Nav.Link>
              <Link to="/Gender" id="titleGender">
                {" "}
                Gêneros{" "}
              </Link>
            </Nav.Link>
            <NavDropdown title="Lista" id="titleGender">
              <NavDropdown.Item href="" to="/Gender">Ação</NavDropdown.Item>
              <NavDropdown title="Gêneros" id="titleGender">
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
            </NavDropdown>
            <Nav.Link>
              <Link
                to="/Logindisplay"
                style={{
                  margin: "auto",
                  padding: "auto",
                  marginLeft: 505,
                  textDecoration: "none",
                  color: "gray",
                }}
                className="link-menu"
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
