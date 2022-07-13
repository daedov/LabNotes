import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { saveNote, getNote, updateNote } from '../firebase/noteProcess';
import { useParams, useNavigate } from 'react-router-dom';

const NoteForm = () => {
  const initialValues = {
    title: '',
    description: '',
  };
  const [note, setNote] = useState(initialValues);
  const params = useParams();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setNote({
      ...note,
      [name]: value
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!params.id) {
      await saveNote(note);
    } else {
      await updateNote(note, params.id);
    }
    setNote(initialValues);
    navigate('/ShowDashboard');
  }
  const getNoteById = async (id) => {
    try {
      const note = await getNote(id); 
      setNote({ ...note.data()});
    } catch (error) {
      throw error.message;
    }
  }
  useEffect(() => {
    if(params.id) {
      getNoteById(params.id);
    }
  }, [params.id]);

  return(
    <Container className="board m-5 p-5">
      <div>
        <h3>Create a New Note</h3>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title Note</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={note.title}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description Note</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={note.description}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="secondary" type="submit">Add Note</Button>
        </Form>
      </div>
    </Container>
  )
}

export default NoteForm; 