import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import styles from "./footer.module.css"

function Footer() {
  return (
    <Navbar className={styles.footerList} fixed="bottom">
      <Nav.Item >
        <Nav.Link href="/home">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Navbar>
  );
}

export default Footer;
