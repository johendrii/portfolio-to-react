import { Jumbotron, Container, Row } from "react-bootstrap";
import ImageJumbotron from "./ImageJumbotron";

const JumbotronPart = () => {
  return (
    <Jumbotron fluid>
      <Container className="text-center ">
        <Row className="justify-content-center">
          <ImageJumbotron />
        </Row>
        <h1 className="display-4">Johendri Haris Siregar</h1>
        <p className="lead">
          "Learn from the past, live for today and plan for tomorrow"
        </p>
      </Container>
    </Jumbotron>
  );
};

export default JumbotronPart;
