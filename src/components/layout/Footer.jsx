import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styles from './Layout.module.css';

const Footer = () => {
  return (
    <Navbar className={styles.footerList} fixed="bottom">
      <Nav.Item>
        <Nav.Link className={styles.underlineNone} href="/home">
          Gmail
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className={styles.underlineNone} eventKey="link-1">
          Facebook
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className={styles.underlineNone} eventKey="link-2">
          Trello
        </Nav.Link>
      </Nav.Item>
    </Navbar>
  );
};

export default Footer;
