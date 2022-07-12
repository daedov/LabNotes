import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Layout.module.css';

const NavMenu = () => {
  // const userSignOut = async () => {
  //   try {
  //     await signOutWithEmail();
  //   } catch (error) {
  //     throw error.message;
  //   }
  // };
  return (
    <Nav variant="pills" className="justify-content-end">
      <Nav.Item className={styles.border}>
          <Link to="/" className={styles.underlineNone}>Home</Link>
      </Nav.Item>
      <Nav.Item className={styles.border}>
          <Link to="/ShowDashboard" className={styles.underlineNone}>Dashboard</Link>
      </Nav.Item>
      <Nav.Item className={styles.border} >
          <Link to="/SignOut" className={styles.underlineNone} >SignOut</Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavMenu;
