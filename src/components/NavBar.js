import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../contexts/CurrentUserContext";

function NavBar() {
  
  const currentUser = useCurrentUser();

  const loggedInIcons = <>{ currentUser?.username }</>
  const loggedOutIcons = (
    <>
      <NavLink to="/signin" className={styles.NavLink} activeClassName={styles.Active} >
        <i className="fas fa-sign-in-alt"></i> Sign in
      </NavLink>
      <NavLink to="/signup" className={styles.NavLink} activeClassName={styles.Active} >
        <i className="fas fa-user-plus"></i> Sign up
      </NavLink>
            
    </>
  )

  return (
    <Navbar className={styles.NavBar}  fixed="top" expand="md">
      <Container>

        <NavLink to="/">
          <Navbar.Brand><img src={logo} alt='logo' height='50' width='150' /></Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ml-auto text-left justify-content-center">
              <NavLink to="/" className={styles.NavLink} activeClassName={styles.Active} ><i className="fa-solid fa-house"></i> Home</NavLink>
              {currentUser ? loggedInIcons : loggedOutIcons}
            </Nav>
          </Navbar.Collapse>

      </Container>
    </Navbar>
   
  )
}

export default NavBar