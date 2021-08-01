import { React, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import "./AddQuestion.css";

export default function AddQuestion() {
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
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Question</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <Form.Label>Correct Answer:</Form.Label>

          <InputGroup className="mb-3">
            <FormControl
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text
              className="Green"
              id="basic-addon2"
            ></InputGroup.Text>
          </InputGroup>
          <Form.Label >Incorrect Answers:</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text
              className="Red"
              id="basic-addon2"
            ></InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text
              className="Red"
              id="basic-addon2"
            ></InputGroup.Text>
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text
              className="Red"
              id="basic-addon2"
            ></InputGroup.Text>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer className="Modals">
          <Button
            variant="outline-danger"
            className="Button"
            onClick={handleClose}
          >
            Save
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

