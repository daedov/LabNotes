// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, Form, Row, Col, Button } from 'react-bootstrap';
// import { addDoc, collection} from 'firebase/firestore';
// import { db } from '../firebase/init';

// const CreateNote = () => {
//   const navigate = useNavigate();
//   const date = new Date();
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const allNotes = collection(db, 'note');
//   const noteData = {
//     title: title,
//     description: description,
//     day: date.toLocaleDateString(),
//     hour: date.toLocaleTimeString(),
//   }
//   const addNewNote = async (event) => {
//     event.preventDefault();
//     try {
//       await addDoc(allNotes, noteData);
//       navigate('/Dashboard')
//     } catch (error) {
//       throw error.message;
//     }
//     setTitle('');
//     setDescription('');
//   }
//   return (
//     <Container className="board m-5 p-5">
//       <div>
//         <h3>Create a New Note</h3>
//         <Form onSubmit={addNewNote}>
//           <Row>
//             <Col>
//               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                 <Form.Label>Title Note</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="title"
//                   value={title}
//                   onChange={(event) => setTitle(event.target.value)}
//                 />
//               </Form.Group>
//             </Col>
//             <Col>
//               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                 <Form.Label>Description Note</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="description"
//                   value={description}
//                   onChange={(event) => setDescription(event.target.value)}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>
//           <Button variant="secondary" type="submit">Add Note</Button>
//         </Form>
//       </div>
//     </Container>
//   );
// };

// export default CreateNote;
