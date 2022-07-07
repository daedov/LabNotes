import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Layout.module.css';

const SignOut = () => {
  return (
    <Container className={styles.container}>
      <h3 className={styles.title}>Vuelve pronto!</h3>
      <Link to="/">
        <Button variant="secondary" className={styles.btn}>
          Volver al inicio
        </Button>
      </Link>
    </Container>
  );
};

export default SignOut;
