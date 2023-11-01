import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";

function NavBar() {
  
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      console.log(err);
    }
  };

  const addRecipeIcon = (
    <NavLink to="/recipes/create" className={styles.NavLink} activeClassName={styles.Active} >
        <i class="fa-solid fa-plus"></i> New Recipe
    </NavLink>
  )
  const loggedInIcons = <>
    <NavLink to="/feed" className={styles.NavLink} activeClassName={styles.Active} >
      <i class="fa-solid fa-bars-staggered"></i> Feed
    </NavLink>

    <NavLink to="/bookmarks" className={styles.NavLink} activeClassName={styles.Active} >
      <i class="fa-regular fa-bookmark"></i> Bookmarked
    </NavLink>

    <NavLink to="/" className={styles.NavLink} onClick={handleSignOut}>
      <i class="fa-solid fa-right-from-bracket"></i> Sign out
    </NavLink>

    <NavLink to={`/profiles/${currentUser?.profile_id}`} className={styles.ProfileNavLink} >
     <Avatar src={currentUser?.profile_image} height={45} text="profile"/>
    </NavLink>
  </>
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
    <Navbar expanded={expanded} className={styles.NavBar}  fixed="top" expand="md">
      <Container>

        <NavLink to="/">
          <Navbar.Brand><img src={logo} alt='logo' height='60' width='65'/></Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll"  onClick={() => setExpanded(!expanded)} ref={ref}/>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ml-auto text-left justify-content-center">
              {currentUser && addRecipeIcon}
              <NavLink to="/" className={styles.NavLink} activeClassName={styles.Active} > <i className="fas fa-home"></i> Home</NavLink>
              {currentUser ? loggedInIcons : loggedOutIcons}
            </Nav>
          </Navbar.Collapse>

      </Container>
    </Navbar>
   
  )
}

export default NavBar