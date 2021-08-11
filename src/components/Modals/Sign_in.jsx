import React, { useState, useEffect, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Modals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import email from "./images/email.png";
import password from "./images/padlock.png";
import gmail from "./images/gmail.png";
import facebook from "./images/facebook.png";
import { auth, google, facebookk } from "../../Firebase";
/* eslint-disable no-debugger, no-console */

function Sign_in(props) {
  const [show, setShow] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const sign_In = () => {
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const joinUsingGoogle = () => {
    // Sign into Firebase using popup auth & Google as the identity provider.
    auth.signInWithPopup(google);
  };

  const joinUsingFacebook = () => {
    // Sign into Firebase using popup auth & Google as the identity provider.
    auth.signInWithPopup(facebookk);
  };
  const handleClose = () => {
    setShow(false);
    props.showSignIn();
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <>
      {/* Modal header */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header id="ModalTitle">
          <Modal.Title>Welcome Back! We Missed You!</Modal.Title>
        </Modal.Header>

        {/* Modal Body */}

        <Modal.Body>
          <div className="container-fluid">
            {/* EMAIL */}

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
                  ref={emailRef}
                />
              </div>
            </div>
            <br />

            {/* PASSWORD */}

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
                  ref={passwordRef}
                />
              </div>
            </div>
            <br />

            {/* SIGN IN */}

            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 text-center">
                <Button
                  id="SignInButton"
                  onClick={() =>
                    sign_In(emailRef.current.value, passwordRef.current.value)
                  }
                >
                  Sign In
                </Button>
              </div>
            </div>
            <br />

            {/* OR */}

            <div className="row">
              <div className="col-md-12 text-center">
                <p>OR:</p>
              </div>
            </div>

            {/* GMAIL AND FACEBOOK */}

            <div className="row justify-content-center">
              <div className="col-4 col-sm-2 col-md-2 p-0 text-center">
                <a href="#" onClick={joinUsingGoogle}>
                  <img src={gmail} alt="email" border="0" />
                </a>
              </div>
              <div className="col-4 col-sm-2 col-md-2 p-0 text-center ">
                <a href="#" onClick={joinUsingFacebook}>
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
