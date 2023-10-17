import React from 'react';
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import logo from '../assets/logo.png';

function NavBar() {
  return (
    <Navbar bg="light" variant="light" fixed="top" expand="md">
    <Container>
      <Navbar.Brand><img src={logo} alt='logo' height='60' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ml-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >Sign in</Nav.Link>
            <Nav.Link >Sign up</Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar