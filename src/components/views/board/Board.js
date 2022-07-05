import React from "react";
import { Form, Container, Col, Row, Button, Card} from "react-bootstrap";

function Board() {
  return (
    <Container className="board m-5 p-5">
      <h3>Soy el board con todas las notas</h3>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label><i className="material-icons">border_color</i> Title Note</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description Note</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="secondary">Add Task</Button>
      </Form>

      <Card className="m-3">
        <Card.Img variant="top" src="https://picsum.photos/200/50" />
        <Card.Body>
          <Card.Title>Title Task</Card.Title>
          <Card.Text>
            Task Description...
          </Card.Text>
          <Button variant="secondary">Read more</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Board;
