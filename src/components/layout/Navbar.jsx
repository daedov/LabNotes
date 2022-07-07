import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import styles from './Layout.module.css';
import { signOutWithEmail } from '../../firebase/auth';

const NavMenu = () => {
  const userSignOut = async () => {
    try {
      await signOutWithEmail();
    } catch (error) {
      throw error.message;
    }
  };
  return (
    <Navbar className={styles.navColor} bg="light" expand="lg">
      <Container>
        <Navbar.Brand className={styles.navBrand} href="/">
          <span className={styles.titleBrand}>LabNotes</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={styles.navCollapse} id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className={styles.underlineNone} to="/">
              Home
            </NavLink>
            <NavLink className={styles.underlineNone} to="/Dashboard">
              Dashboard
            </NavLink>
            <NavLink className={styles.underlineNone} to="/Register">
              Register
            </NavLink>
            <NavLink className={styles.underlineNone} onClick={userSignOut} to="/SignOut">
              SignOut
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
