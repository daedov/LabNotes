import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styles from './Layout.module.css';

const Footer = () => {
  return (
    <Navbar className={styles.footerList} fixed="bottom">
      <Nav.Item>
        <Nav.Link className="font-mono text-fuchsia-900" href="https://github.com/daedov/LabNotes">
          Made with ❤ by daedov
        </Nav.Link>
      </Nav.Item>
    </Navbar>
  );
};

export default Footer;
