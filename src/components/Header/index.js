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
              <Link to="/"> ANIME </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Secondaryone"> MANGÁ </Link>
            </Nav.Link>
            <NavDropdown title="Opções" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://anihub.tv/">
                Animes Online
              </NavDropdown.Item>
              <NavDropdown.Item href="https://wall.alphacoders.com/by_category.php?id=3&name=Anime+Pap%C3%A9is+de+Parede&lang=Portuguese">
                Wallpapers
              </NavDropdown.Item>
              <NavDropdown.Item href="https://mangalivre.net/">
                Mangás Online
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Gender">Gêneros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default index;

/* rfce - estrutura pronta*/
