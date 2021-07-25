import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Modals.css";

function Sign_in() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Report
      </Button>

      {/* Modal header */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header id="ModalTitle">
          <Modal.Title>Welcome Back! We Missed You!</Modal.Title>
        </Modal.Header>

        {/* Modal Body */}

        <Modal.Body>
          <label htmlFor="report">
            <img
              src="C:\Users\Hazem El Sankari\Downloads\email.png"
              // width="10%"
              // height="10%"
            ></img>
          </label>
          {/* <br /> */}
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            className="ModalBody"
          />
          <br />
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
          <Button variant="outline-danger" id="SendButton">
            Send
          </Button>{" "}
          <Button variant="outline-success" id="CancelReport">
            Cancel
          </Button>{" "}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Sign_in;
