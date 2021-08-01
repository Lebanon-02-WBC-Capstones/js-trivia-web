import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "./Delete.css";

export default function DeleteQuestion() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="ModalButton" onClick={handleShow}>
        Delete
      </button>

      <Modal id="ModalPage" show={show} onHide={handleClose} animation={false}>
        <Modal.Body bsPrefix="modal-body" className="Modals">
          Delete this question?
        </Modal.Body>
        <Modal.Footer className="Modals">
          <Button
            variant="outline-danger"
            className="Button"
            onClick={handleClose}
          >
            Delete
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
