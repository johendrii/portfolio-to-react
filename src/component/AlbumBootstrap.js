import { Container, Row, Col, Card } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import img1 from "../img/Album/1.png";
import img2 from "../img/Album/2.png";
import img3 from "../img/Album/3.png";
import img4 from "../img/Album/4.png";
import img5 from "../img/Album/5.png";
import img6 from "../img/Album/6.png";

const Album = () => {
  return (
    <section className="bg-grey" id="album">
      <Container fluid="sm">
        <Row className="mb-3 pt-3">
          <Col className="text-center">
            <h1>
              <div className="d-block bg-dark text-white">
                <ScrollAnimation
                  animateIn="animate__rubberBand"
                  initiallyVisible={true}
                >
                  ALBUM{" "}
                </ScrollAnimation>
              </div>
            </h1>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md>
            <ScrollAnimation
              animateIn="animate__bounceInDown"
              animateOnce={true}
              duration={2}
            >
              <Card>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </ScrollAnimation>
          </Col>

          <Col md>
            <ScrollAnimation
              animateIn="animate__bounceInDown"
              animateOnce={true}
              duration={2}
              delay={300}
            >
              <Card>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </ScrollAnimation>
          </Col>

          <Col md>
            <ScrollAnimation
              animateIn="animate__bounceInDown"
              animateOnce={true}
              duration={2}
              delay={600}
            >
              <Card>
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </ScrollAnimation>
          </Col>
        </Row>

        <Row>
          <Col md>
            <ScrollAnimation
              offset={90}
              animateIn="animate__bounceInDown"
              animateOnce={true}
              duration={2}
              delay={300}
            >
              <Card>
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </ScrollAnimation>
          </Col>

          <Col md>
            <ScrollAnimation
              offset={90}
              animateIn="animate__bounceInDown"
              animateOnce={true}
              duration={2}
              delay={600}
            >
              <Card>
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </ScrollAnimation>
          </Col>

          <Col md>
            <ScrollAnimation
              offset={90}
              animateIn="animate__bounceInDown"
              animateOnce={true}
              duration={2}
              delay={900}
            >
              <Card>
                <Card.Img variant="top" src={img6} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Album;
