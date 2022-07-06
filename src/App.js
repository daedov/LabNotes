import React from "react";
import { Button } from "react-bootstrap";
import styles from "./App.module.css";
import "./index.js";

function App() {
  return (
    <div className={styles.app}>
      <h3 className={styles.title}>LabNotes</h3>
      <h4>The Best Planner</h4>
      <div className={styles.btnInline}>
        <Button className={styles.btn}>Sign In</Button>
        <Button className={styles.btn}>Google</Button>
      </div>
      <Button className={styles.btn}>Create Account</Button>
    </div>
  );
}

export default App;
