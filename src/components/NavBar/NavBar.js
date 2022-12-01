import React from "react";
import CartWidget from "../../components/CartWidget/CartWidget";
import "./nabvar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" bg="light" variant="light" className="containers">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ul ">
              <Nav.Link className="links" href="#/">
                Home
              </Nav.Link>
              <NavDropdown title="Catalogo" id="dropdown">
                <NavDropdown.Item href="#/">Tecnologias</NavDropdown.Item>
                <NavDropdown.Item href="#/">Hogar y Muebles</NavDropdown.Item>
                <NavDropdown.Item href="#/">Moda</NavDropdown.Item>
               
                <NavDropdown.Item href="#/">Electronico</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="links" href="#/">
                Oferta
              </Nav.Link>
              <Nav.Link className="links" href="#/">
                Envios
              </Nav.Link>
              <Nav.Link className="links" href="#/">
                Ayuda
              </Nav.Link>
            </Nav>
            <Nav className=" navregistro " id="links">
              <Nav.Link className="links" href="#/">
                Registro
              </Nav.Link>
              <Nav.Link className="links" href="#/">
                Login
              </Nav.Link>
              <Nav.Link className="links" href="#/">
                Mis Compras
              </Nav.Link>
              <Nav.Link className="links" href="#/">
                <CartWidget className="links" />
              </Nav.Link>
              <Nav.Link className="links" href="#/">
                <img src="" alt="" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
