import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './App.module.css';
import './index.js';
import { signInWithGoogle } from './firebase/auth';

const App = () => {
  const googleLogin = async () => {
    await signInWithGoogle();
  };
  return (
    <div className={styles.app}>
      <h3 className={styles.title}>LabNotes</h3>
      <h4 className={styles.subtitle}>The Best Planner</h4>
      <div className={styles.btnInline}>
        <Button variant="secondary" className={styles.btn}>
          Sign In
        </Button>
        <Button variant="secondary" onClick={googleLogin} className={styles.btn}>
          Google
        </Button>
      </div>
      <Button variant="secondary" className={styles.btn}>
        Create Account
      </Button>
    </div>
  );
};

export default App;
