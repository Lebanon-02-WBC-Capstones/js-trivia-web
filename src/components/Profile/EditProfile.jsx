import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { Image, Button } from "react-bootstrap";
import DefaultPic from "../../assets/user-profile.png";
import EditProfileModal from "../Modals/EditProfileModal";

export default function EditProfile(props) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button
        className="edit-profile-button"
        variant="text"
        style={{ color: "blue" }}
        onClick={() => setShow(true)}
      >
        <i>edit profile</i>
      </Button>
      <EditProfileModal
        show={show}
        onHide={() => setShow(false)}
        photo={props.photo}
        changeName={props.changeName}
      />
    </div>
  );
}
