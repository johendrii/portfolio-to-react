import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { animateScroll as scroll, scroller } from "react-scroll";
import { useSpring, animated } from "react-spring";

const NavbarPart = () => {
  const [toggleX, setToggleX] = useState(false);
  const [toggleY, setToggleY] = useState(false);
  const [toggleZ, setToggleZ] = useState(false);
  const [toggleW, setToggleW] = useState(false);
  const { x } = useSpring({
    from: { x: 0 },
    x: toggleX ? 1 : 0,
    config: { duration: 1000 },
  });
  const { y } = useSpring({
    from: { y: 0 },
    y: toggleY ? 1 : 0,
    config: { duration: 1000 },
  });
  const { z } = useSpring({
    from: { x: 0 },
    z: toggleZ ? 1 : 0,
    config: { duration: 1000 },
  });
  const { w } = useSpring({
    from: { w: 0 },
    w: toggleW ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          onClick={() => {
            scroll.scrollToTop({ smooth: "true", duration: 500 });
          }}
          href="#home"
        >
          {" "}
          Johendrii{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="ml-auto text-center">
            <Nav.Link
              className="about"
              onClick={() => {
                setToggleX(!toggleX);
                scroller.scrollTo("about", {
                  offset: -56,
                  duration: 500,
                  smooth: "easeInOutBounce",
                });
              }}
            >
              <animated.div
                style={{
                  transform: x
                    .interpolate({
                      range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      output: [1, 1.1, 1.3, 1.5, 1.2, 1.5, 1.2, 1],
                    })
                    .interpolate((x) => `scale(${x})`),
                }}
              >
                About
              </animated.div>
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                setToggleY(!toggleY);
                scroller.scrollTo("project", {
                  offset: -56,
                  duration: 500,
                  smooth: "true",
                });
              }}
            >
              <animated.div
                style={{
                  transform: y
                    .interpolate({
                      range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      output: [1, 1.1, 1.3, 1.5, 1.2, 1.5, 1.2, 1],
                    })
                    .interpolate((y) => `scale(${y})`),
                }}
              >
                {" "}
                Project
              </animated.div>
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                setToggleW(!toggleW);
                scroller.scrollTo("album", {
                  offset: -56,
                  duration: 500,
                  smooth: "true",
                });
              }}
            >
              <animated.div
                style={{
                  transform: w
                    .interpolate({
                      range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      output: [1, 1.1, 1.3, 1.5, 1.2, 1.5, 1.2, 1],
                    })
                    .interpolate((x) => `scale(${x})`),
                }}
              >
                {" "}
                Album
              </animated.div>
            </Nav.Link>

            <Nav.Link
              className="contact"
              onClick={() => {
                setToggleZ(!toggleZ);
                scroller.scrollTo("contact", {
                  offset: -56,
                  duration: 500,
                  smooth: "true",
                });
              }}
            >
              <animated.div
                style={{
                  transform: z
                    .interpolate({
                      range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      output: [1, 1.1, 1.3, 1.5, 1.2, 1.5, 1.2, 1],
                    })
                    .interpolate((y) => `scale(${y})`),
                }}
              >
                {" "}
                Contact
              </animated.div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPart;
