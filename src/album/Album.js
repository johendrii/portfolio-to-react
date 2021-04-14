import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import UploadForm from "./components/UploadForm";
import "./Album.css";
import ScrollAnimation from "react-animate-on-scroll";

function Project3() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="album">
      <Container>
        <Row className="mb-3 pt-3">
          <Col className="text-center">
            <h1>
              <div className="d-block bg-grey text-dark">
                <ScrollAnimation
                  animateIn="animate__rubberBand"
                  initiallyVisible={true}
                  offset={65}
                >
                  ALBUM{" "}
                </ScrollAnimation>
              </div>
            </h1>
          </Col>
        </Row>

        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </Container>
    </section>
  );
}

export default Project3;
