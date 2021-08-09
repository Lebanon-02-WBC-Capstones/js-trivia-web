import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import ThankYouModal from "../Modals/ThankYouModal";
import emailjs from "emailjs-com";
import "./ContactUs.css";
/* eslint-disable no-console */

export default function ContactUs() {
  const [show, setShow] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    console.log("email sent");

    emailjs
      .sendForm(
        "service_fmge8o6",
        "ContactUs",
        e.target,
        "user_LHAgrjFDucqaQHuDLk0rn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="Contact-Us-Form">
      <h1 className="Contact-Us-Header">Contact Us Below</h1>
      <Form onSubmit={sendEmail}>
        <Form.Group
          id="from-group"
          as={Row}
          className="mb-3"
          controlId="formBasicPassword"
        >
          <Form.Label column sm="2">
            Please enter your full name:
          </Form.Label>
          <Col sm="7">
            <Form.Control type="input" placeholder="Name" name="name" />
          </Col>
        </Form.Group>
        <Form.Group
          id="from-group"
          as={Row}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Label column sm="2">
            Please enter your email:
          </Form.Label>
          <Col sm="7">
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Col>
          <Form.Text className="text-muted">
            We will never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group
          id="from-group"
          as={Row}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label column sm="2">
            Please type your message here:
          </Form.Label>
          <Col sm="7">
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              placeholder="Message"
            />
          </Col>
        </Form.Group>
        <Button
          type="submit"
          variant="primary"
          id="SubmitForm"
          onClick={() => setShow(true)}
        >
          Submit
        </Button>
        <ThankYouModal show={show} onHide={() => setShow(false)} />
      </Form>
    </div>
  );
}
