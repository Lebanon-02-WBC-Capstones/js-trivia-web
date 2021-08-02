import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "./Cancel.css";

export default function Cancel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="ModalButton" onClick={handleShow}>
        Cancel
      </button>

      <Modal id="ModalPage" show={show} onHide={handleClose} animation={false}>
        <Modal.Body bsPrefix="modal-body" className="Modals">
          All your changes will be lost.
        </Modal.Body>
        <Modal.Footer className="Modals">
          <Button
            variant="outline-danger"
            className="Button"
            onClick={handleClose}
          >
            Okay
          </Button>{" "}
          <Button
            variant="outline-success"
            className="Button"
            onClick={handleClose}
          >
            Cancel
          </Button>{" "}
        </Modal.Footer>
      </Modal>
    </>
  );
}