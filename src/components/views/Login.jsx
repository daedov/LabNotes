import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
  return (
    <Container className="home m-5 p-5 justify-content-center">
      <h3>Login</h3>
      <Form className="justify-content-center ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="danger">Google</Button>
      </Form>
    </Container>
  );
};

export default Login;
