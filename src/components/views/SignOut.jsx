import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import styles from '../layout/Layout.module.css';

const SignOut = () => {
  return (
    <Container className={styles.container}>
      <h3 className={styles.title}>Come back soon!</h3>
      <Link to="/">
        <Button variant="secondary" className={styles.btn}>
          Go Back
        </Button>
      </Link>
    </Container>
  );
};

export default SignOut;
