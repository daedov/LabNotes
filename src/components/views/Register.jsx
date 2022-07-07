import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Register = () => {
  return (
    <Container className="m-5 p-5 justify-content-center">
      <div className="register">
        <h3>Register</h3>
        <Form className="justify-content-center ">
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your user name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              Well never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
