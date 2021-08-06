import React from "react";
import { Modal, Button, Image, Form, Row } from "react-bootstrap";
import DefaultPic from "../../Assets/user-profile.png";
import "./EditProfileModal";
/* eslint-disable react/prop-types */

export default function EditProfileModal(props) {
  return (
    <Modal {...props}>
      <Modal.Body className="edit-profile-modal">
        <Row>
          <Image src={DefaultPic} width="193" roundedCircle />
        </Row>
        <Row>
          <Button
            className="mt-3 mb-3"
            variant="text"
            style={{ color: "blue" }}
          >
            <i>change your picture</i>
          </Button>
        </Row>
        <Form.Control type="input" placeholder="User" name="name" />
      </Modal.Body>
      <Row>
        <Modal.Footer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outline-success"
            className="Button"
            onClick={props.onHide}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Row>
    </Modal>
  );
}
