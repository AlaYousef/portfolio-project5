import React from 'react';
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css'

function NavBar() {
  return (
    <Navbar className={styles.NavBar}  fixed="top" expand="md">
    <Container>
      <Navbar.Brand><img src={logo} alt='logo' height='60' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ml-auto text-left">
            <Nav.Link ><i className="fa-solid fa-house"></i> Home</Nav.Link>
            <Nav.Link ><i className="fas fa-sign-in-alt"></i> Sign in</Nav.Link>
            <Nav.Link ><i className="fas fa-user-plus"></i> Sign up</Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar