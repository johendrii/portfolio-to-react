import { Container, Row, Col } from "react-bootstrap";
import Project1 from "../project1/Project1";
// import Project2 from "../project2/Project2";
import ScrollAnimation from "react-animate-on-scroll";

const Project = () => {
  return (
    <section className="bg-grey" id="project">
      <Container fluid="sm">
        <Row className="mb-3 pt-3">
          <Col className="text-center">
            <h1>
              <div className="d-block bg-dark text-white">
                <ScrollAnimation
                  animateIn="animate__rubberBand"
                  initiallyVisible={true}
                >
                  PROJECT{" "}
                </ScrollAnimation>
              </div>
            </h1>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <h3 className="d-block bg-dark text-white text-center expense-title">
              Expense Tracker
            </h3>
            <Project1 />
          </Col>
          <Col md={6}>
            <h3 className="d-block bg-dark text-white text-center expense-title">
              Task Tracker
            </h3>
            {/* <Project2 /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Project;
