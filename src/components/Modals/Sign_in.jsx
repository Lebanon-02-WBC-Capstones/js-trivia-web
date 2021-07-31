import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Modals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import email from "./images/email.png";
import password from "./images/padlock.png";
import gmail from "./images/gmail.png";
import facebook from "./images/facebook.png";

function Sign_in() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign In
      </Button>

      {/* Modal header */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header id="ModalTitle">
          <Modal.Title>Welcome Back! We Missed You!</Modal.Title>
        </Modal.Header>

        {/* Modal Body */}

        <Modal.Body>
          <div className="container-fluid">
            <div className="row justify-content-center" id="signIn">
              <div className="col-2 col-sm-2 col-md-2 p-0 my-auto text-center">
                <img src={email} alt="email" border="0" />
              </div>
              <div className=" col-10 col-sm-10 col-md-10 p-0 ">
                <input
                  type="text"
                  name="report"
                  placeholder="Email"
                  className="ModalBody"
                />
              </div>
            </div>
            <br />
            <div className="row justify-content-center">
              <div className="col-2 col-sm-2 col-md-2 p-0 my-auto text-center">
                <img src={password} alt="email" border="0" />
              </div>
              <div className="col-10 col-sm-10 col-md-10 p-0 my-auto mx-auto ">
                <input
                  type="text"
                  name="report"
                  placeholder="Password"
                  className="ModalBody"
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 text-center">
                <Button id="SignInButton">Sign In</Button>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-md-12 text-center">
                <p>OR:</p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-4 col-sm-2 col-md-2 p-0 text-center">
                <a href="#">
                  <img src={gmail} alt="email" border="0" />
                </a>
              </div>
              <div className="col-4 col-sm-2 col-md-2 p-0 text-center ">
                <a href="#">
                  <img src={facebook} alt="email" border="0" />
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Sign_in;
