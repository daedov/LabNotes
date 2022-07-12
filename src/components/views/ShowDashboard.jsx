import React from 'react';
import { UserAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { Container, Button, Card } from 'react-bootstrap';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/init';
import styles from '../layout/Layout.module.css';

const ShowDashboard = () => {
  const { user, logout } = UserAuth();
  const handleLogout = async () => {
    await logout();
    console.log('deslogueo');
  };
  
  const handleDeleteNote = async (id) => {
    try {
      const noteToRemove = doc(db, 'note', id);
      await deleteDoc(noteToRemove);
    } catch (error) {
      throw error.message;
    }
  };

  return (
    <>
      <div>
        <button onClick={handleLogout}>Logout</button>
        <h1>Welcome {user.displayName || user.email}</h1>
        <h3>ShowDashboard here!</h3>
      </div>
      <Container className={styles.container}>
        <h3>Your Task</h3>
        <Card className="m-3">
          <Card.Img variant="top" src="https://picsum.photos/200/50" />
          <Card.Body>
            <Card.Title>Title Task</Card.Title>
            <Card.Text>Task Description...</Card.Text>
            <Link to="/UpdateTask">
              <Button variant="secondary" className={styles.btn}>
                Update Task
              </Button>
            </Link>
            <Button variant="secondary" className={styles.btn} onClick={handleDeleteNote}>
              Delete Task
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default ShowDashboard;
