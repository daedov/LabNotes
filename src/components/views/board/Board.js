import { Form, Container, Col, Row, Button, Card} from "react-bootstrap";

function Board() {
  return (
    <Container className="board m-5 p-5">
      <h3>Soy el board con todas las notas</h3>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title Note</Form.Label>
              <Form.Control type="text" />
              <Form.TextForm className="text-muted">
                Add a title for your note!
              </Form.TextForm>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description Note</Form.Label>
              <Form.Control as="textarea" rows={3} />
              <Form.TextForm className="text-muted">
                Add a description for your Task!
              </Form.TextForm>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="secondary">Add Task</Button>
      </Form>

      <Card className="m-3">
        <Card.Img variant="top" src="https://picsum.photos/200/50" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Board;
