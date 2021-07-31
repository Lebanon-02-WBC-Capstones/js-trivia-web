import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Modals.css";

export default function Unpost() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Unpost
      </Button>

      {/* Modal header */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header id="ModalTitle">
          <Modal.Title>Unpost this quiz</Modal.Title>
        </Modal.Header>

        {/* Modal Body */}

        <Modal.Body>
          <label htmlFor="blog">Message:</label>
          <br />
          <textarea
            name="blog"
            rows="5"
            cols="30"
            placeholder="Message"
            className="ModalBody"
          ></textarea>
        </Modal.Body>

        {/* Modal Buttons */}

        <Modal.Footer id="ModalFooter">
          <Button variant="outline-danger" id="UnpostButton">
            Unpost
          </Button>{" "}
          <Button variant="outline-success" id="CancelUnpost">
            Cancel
          </Button>{" "}
        </Modal.Footer>
      </Modal>
    </>
  );
}
