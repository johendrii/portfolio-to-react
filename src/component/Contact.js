import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { contactRef } from "../firebase/firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [alertShow, setAlertShow] = useState("none");
  // const [hasil, setHasil] = useState([]);
  // const [showKeys, setShowKeys] = useState([]);
  // let hasil = [];

  const saveContact = (name, email, phone, message) => {
    const postData = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    const newPostKey = contactRef.child("posts").push().key;

    const updates = {};
    updates["/posts/" + newPostKey] = postData;

    return contactRef.update(updates);
  };

  // useEffect(() => {
  //   contactRef
  //     .child("posts")
  //     .get()
  //     .then((snapshot) => {
  //       const res = [];
  //       setHasil(res.snapshot.val());
  //     });
  // }, []);

  // contactRef
  //   .child("posts")
  //   .get()
  //   .then((snapshot) => {
  //     setHasil(JSON.stringify(snapshot.val(), null, 3));
  //   });

  // console.log(hasil.name);

  const onSubmit = (e) => {
    e.preventDefault();

    saveContact(name, email, phone, message);

    setAlertShow("block");

    setTimeout(() => {
      setAlertShow("none");
    }, 3000);

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <section id="contact" className="bg-grey">
      <Container fluid="sm" className="pb-5">
        <Row className="mb-3 pt-3">
          <Col className="text-center">
            <h1>
              <div className="d-block bg-dark text-white">
                <ScrollAnimation animateIn="animate__rubberBand">
                  CONTACT{" "}
                </ScrollAnimation>
              </div>
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={4}>
            <Card bg="secondary" className="text-white mb-3 text-center">
              <Card.Body>
                <Card.Title>Contact Me</Card.Title>
                <Card.Text>
                  Feel free to contact me. Just send me a message in the form
                  beside with any questions you may have.
                </Card.Text>
              </Card.Body>
            </Card>
            <ListGroup>
              <ListGroup.Item>+62 812 9767 9194</ListGroup.Item>
              <ListGroup.Item>johendri.h.siregar@gmail.com</ListGroup.Item>
              <ListGroup.Item>
                Jl. Bakti No 40, RT 004/RW 015, Kel. Pancoran Mas, Kec. Pancoran
                Mas. Depok, Kode Pos 16436
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={6}>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId="formGroupName">
                <Form.Label>
                  Name<span>*</span>{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>
                  Email<span>*</span>{" "}
                </Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number"
                />
              </Form.Group>
              <Form.Group controlId="formGroupMessage">
                <Form.Label>
                  Message<span>*</span>{" "}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter message"
                />
              </Form.Group>
              <Form.Group controlId="formGroupButton">
                <Button
                  variant="primary"
                  type="submit"
                  style={{ width: "200px" }}
                  disabled={!name || !email || !message}
                >
                  Submit
                </Button>
              </Form.Group>
              <Alert
                variant="success"
                style={{ display: `${alertShow}`, position: "absolute" }}
              >
                Your message has been sent
              </Alert>
            </Form>
          </Col>
        </Row>
      </Container>
      {/* <ul>
        {hasil.map((has) => (
          <li>
            Nama : {has.name}, phone : {has.phone}, message {has.message}{" "}
          </li>
        ))}
        <li>Nama : </li>
      </ul> */}
    </section>
  );
};

export default Contact;
