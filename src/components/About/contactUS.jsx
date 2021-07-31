import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ThankYouModal from "../Modals/ThankYouModal";
import emailjs from "emailjs-com";
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
    <Form onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="input" placeholder="Name" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} name="message" />
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
  );
}
