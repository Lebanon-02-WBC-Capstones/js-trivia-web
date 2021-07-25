import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function ThankYouModal(modalShow) {
  //   const handleClose = () => setModalShow(false);
  return (
    <Modal
      id="ModalPage"
      show={modalShow}
      //   onHide={handleClose}
      animation={false}
    >
      <Modal.Body>
        <p>Thank you for submitting your message!</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="outline-danger"
          className="Button"
          //   onClick={handleClose}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
