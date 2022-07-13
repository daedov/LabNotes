import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import { UserAuth } from '../context/AuthContext';
import { getNotes, deleteNote } from '../firebase/noteProcess';
import styles from './Views.module.css';
import NoteForm from '../components/NoteForm';

const ShowDashboard = () => {
  const { user, logout } = UserAuth();
  const handleLogout = async () => {
    await logout();
    console.log('deslogueo');
  };
  const navigate = useNavigate();
  const handleDeleteNote = async (id) => {
    try {
      await deleteNote(id);
    } catch (error) {
      throw error.message;
    }
  };

  const [notes, setNotes] = React.useState([]);

  const getNotesList = async () => {
    const querySnapshot = await getNotes();
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setNotes(docs);
  };

  useEffect(() => {
    getNotesList();
  }, []);

  return (
    <>
      <div>
        <button onClick={handleLogout}>Logout</button>
        <h1>Welcome {user.displayName || user.email}</h1>
        <h3>ShowDashboard here!</h3>
      </div>
      <NoteForm />
      {notes.map((note) => (
        <div className="m-3" key={note.id}>
          <Container className={styles.container}>
            <h3>Your Task</h3>
            <Card className="m-3">
              <Card.Img variant="top" src="https://picsum.photos/200/50" />
              <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <Card.Text>{note.description}</Card.Text>
                  <Button
                    variant="secondary"
                    className={styles.btn}
                    key={note.id}
                    onClick={() => navigate(`/edit/${note.id}`)}
                  >
                    Update Task
                  </Button>
                <Button
                  variant="secondary"
                  className={styles.btn}
                  onClick={handleDeleteNote(note.id)}
                >
                  Delete Task
                </Button>
              </Card.Body>
            </Card>
          </Container>
        </div>
      ))}
    </>
  );
};

export default ShowDashboard;
