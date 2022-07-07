import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import styles from './Layout.module.css';

const NotFound = () => {
  return (
    <Container className={styles.container}>
      <h3 className={styles.title}>404 Not Found!</h3>
      <Link to="/">
        <Button variant="secondary" className={styles.btn}>
          Volver al inicio
        </Button>
      </Link>
    </Container>
  );
};

export default NotFound;
