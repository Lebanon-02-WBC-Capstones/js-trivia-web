import React, { useState } from "react";
import { Image, Button } from "react-bootstrap";
import DefaultPic from "../../Assets/user-profile.png";
import EditProfileModal from "../Modals/EditProfileModal";

export default function EditProfile() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Image src={DefaultPic} width="193" roundedCircle />
      <h1>Welcome User</h1>
      <Button
        className="edit-profile-button"
        variant="text"
        style={{ color: "blue" }}
        onClick={() => setShow(true)}
      >
        <i>edit profile</i>
      </Button>
      <EditProfileModal show={show} onHide={() => setShow(false)} />
    </div>
  );
}
