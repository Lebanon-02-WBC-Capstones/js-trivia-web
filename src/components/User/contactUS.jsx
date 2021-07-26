import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ThankYouModal from "./ThankYouModal";

export default function ContactUs() {
  const [show, setShow] = useState(false);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="password" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={() => setShow(true)}>
        Submit
      </Button>
      <ThankYouModal show={show} onHide={() => setShow(false)} />
    </Form>
  );
}
