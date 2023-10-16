import React from 'react'
import { Navbar, Container, Nav, Form } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar bg="light" variant="light" fixed="top" expand="md">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    
  </Navbar>
  )
}

export default NavBar