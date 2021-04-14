import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  const biodata = useSpring({
    to: { right: 0, opacity: 1 },
    from: { right: 95, opacity: 0 },
    config: { duration: 700 },
  });
  const experience = useSpring({
    to: { top: 0, opacity: 1 },
    from: { top: 95, opacity: 0 },
    config: { duration: 700 },
  });
  const education = useSpring({
    to: { left: 0, opacity: 1 },
    from: { left: 95, opacity: 0 },
    config: { duration: 700 },
  });
  return (
    <section id="about">
      <Container fluid="sm">
        <Row className="mb-3 pt-3">
          <Col className="text-center">
            <h1>
              <div className="d-block bg-grey text-dark">
                <ScrollAnimation
                  animateIn="animate__rubberBand"
                  initiallyVisible={true}
                  offset={65}
                >
                  ABOUT{" "}
                </ScrollAnimation>
              </div>
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center text-left biodata">
          <animated.div className="col-md-5" style={biodata}>
            <h3 className="d-block bg-grey text-dark text-center">Biodata</h3>
            <Row as="dl" className="text-justify">
              <Col as="dd" sm={4}>
                Full Name
              </Col>
              <Col as="dd" sm={8}>
                : Johendri Haris Siregar
              </Col>

              <Col as="dd" sm={4}>
                Date of Birth
              </Col>
              <Col as="dd" sm={8}>
                : January 10th, 1994
              </Col>

              <Col as="dd" sm={4}>
                Place of Birth
              </Col>
              <Col as="dd" sm={8}>
                : Pematang Reba, Riau
              </Col>

              <Col as="dd" sm={4}>
                Gender
              </Col>
              <Col as="dd" sm={8}>
                : Male
              </Col>

              <Col as="dd" sm={4}>
                Marital Status
              </Col>
              <Col as="dd" sm={8}>
                : Single
              </Col>

              <Col as="dd" sm={4}>
                Nationality
              </Col>
              <Col as="dd" sm={8}>
                : Indonesia
              </Col>
            </Row>
          </animated.div>

          <animated.div className="col-md-6" style={education}>
            <h3 className="d-block bg-grey text-dark text-center">Education</h3>
            <Row as="dl">
              <Col as="dt" sm={3}>
                2006 - 2009
              </Col>
              <Col as="dd" sm={9}>
                <span> Junior High School </span>- West Rengat, Riau
              </Col>

              <Col as="dt" sm={3}>
                2009 - 2012
              </Col>
              <Col as="dd" sm={9}>
                <span>Vocational High Schools </span> - West Rengat, Riau
              </Col>

              <Col as="dt" sm={3}>
                2012 - 2016
              </Col>
              <Col as="dd" sm={9}>
                <span>Gunadarma University </span> - Depok, Jakarta <br></br>{" "}
                <span>Bachelor of Computer Science</span> <br></br>GPA 3.18
                (4.00 grade scale)
              </Col>
            </Row>
          </animated.div>

          <animated.div className="col-md-11 exp" style={experience}>
            <h3 className="d-block bg-grey text-dark text-center">Skills</h3>
            <Row as="dl">
              <Col as="dt" sm={3}>
                Software
              </Col>
              <Col as="dd" sm={9}>
                <span>HTML 5, CSS 3</span> <br></br>
                Knowledgeable in basic CSS styling, positioning, alignment,
                transition and animation. <br></br>
                <br></br>
                <span>JavaScript</span> <br></br>
                Understand basic JavaScript such as variables, arrays,
                functions, loops etc.<br></br>DOM, Array Methods, JSON and HTTP
                Request. <br></br>
                <br></br>
                <span>FRAMEWORKS : React, Firebase and Bootstrap</span>{" "}
                <br></br>
                This page is using the development built of React, Firebase and
                Bootstrap. <br></br>
                <br></br>
                <span>Basic Tools</span> <br></br>
                Visual Studio Code, Chrome, NPM (Node Package Manager), GitHub,
                Figma and Photoshop. <br></br>
                <br></br>
                <span>Operating System</span> <br></br>
                Familiar with MacOS and Windows. <br></br>
                <br></br>
              </Col>
            </Row>

            <Row as="dl">
              <Col as="dt" sm={3}>
                Hardware
              </Col>
              <Col as="dd" sm={9}>
                <span>Networking</span>
                <br></br>
                Internet Networking, ZTE, Cisco, Routing & Switching, GPON /
                FTTH. <br></br>
                <br></br>
                <span>Radio Communications</span>
                <br></br>
                Knowledgeable in commissioning & testing of transmission
                equipment such as Ericsson, Ceragon, Huawei RTN and NEC Ipaso.{" "}
                <br></br>
                <br></br>
              </Col>
            </Row>

            <Row as="dl">
              <Col as="dt" sm={3}>
                Personal Skills
              </Col>
              <Col as="dd" sm={9}>
                <span>Teamwork</span> <br></br>
                Good at finding fast and effective solutions to various problem.
                The ability to work well with others. <br></br>
              </Col>
            </Row>
          </animated.div>

          <animated.div className="col-md-11 exp" style={experience}>
            <h3 className="d-block bg-grey text-dark text-center">
              Experience
            </h3>
            <Row as="dl">
              <Col as="dt" sm={3}>
                PT Telkom Indonesia
              </Col>
              <Col as="dd" sm={9}>
                <span>IT Helpdesk</span>
                <br></br>
                August, 2017 - Present <br></br>
                Providing daily operational support and system administration
                for core and radio network infrastructure. Writing up accurate
                technical documentation. Monitoring network performance.
              </Col>
            </Row>
            <Row as="dl">
              <Col as="dt" sm={3}>
                PT Bussan Auto Finance
              </Col>
              <Col as="dd" sm={9}>
                <span>IT Support (Internship)</span> <br></br>
                April, 2017 - June, 2017 <br></br>
                Troubleshoot, join domain and standardization computers.
              </Col>
            </Row>
          </animated.div>
        </Row>
      </Container>
    </section>
  );
};

export default About;
