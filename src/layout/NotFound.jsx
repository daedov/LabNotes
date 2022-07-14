import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styles from './Layout.module.css';

const NotFound = () => {
  return (
    <Container className={styles.container}>
      <h3 className="font-bold text-4xl tracking-wide text-fuchsia-900">404 Not Found!</h3>
      <Link to="/">
        <p className="font-mono  text-2xl text-center p-2 mx-1 text-sm text-purple-600 font-semibold hover:text-purple-400 hover:bg-purple-100 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Go back
        </p>
      </Link>
    </Container>
  );
};

export default NotFound;
