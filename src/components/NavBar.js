import React from 'react';
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar className={styles.NavBar}  fixed="top" expand="md">
      <Container>

        <NavLink to="/">
          <Navbar.Brand><img src={logo} alt='logo' height='60' /></Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ml-auto text-left justify-content-center">
              <NavLink to="/" className={styles.NavLink} activeClassName={styles.Active} ><i className="fa-solid fa-house"></i> Home</NavLink>
              <NavLink to="/signin" className={styles.NavLink} activeClassName={styles.Active} ><i className="fas fa-sign-in-alt"></i> Sign in</NavLink>
              <NavLink to="/signup" className={styles.NavLink} activeClassName={styles.Active} ><i className="fas fa-user-plus"></i> Sign up</NavLink>
            </Nav>
          </Navbar.Collapse>

      </Container>
    </Navbar>
   
  )
}

export default NavBar