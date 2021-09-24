import React from "react";
//import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
const MainMenu = () => (
   
    <div className="container">
 



<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link exact href="/">Home</Nav.Link>
    <Nav.Link exact href="/estudiantes">Estatudiantes</Nav.Link>
    <Nav.Link exact href="/Personajes">Personajes</Nav.Link>
    <Nav.Link exact href="/contacto">Contacto</Nav.Link>
    <Nav.Link exact href="/datos_api">Api</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>


)

export default MainMenu;