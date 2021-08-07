import React, { useState } from "react";
import { Modal, Button, Container } from "react-bootstrap";
import Sign_in from "./Sign_in";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Modals.css";
import emailPic from "./images/email.png";
import password from "./images/padlock.png";
import gmail from "./images/gmail.png";
import facebook from "./images/facebook.png";
import firebase from "firebase/app";
import "firebase/auth";
/* eslint-disable no-debugger, no-console */

function Sign_up(props) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [comfPass, setComfPass] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Signs-in
  function signIn() {
    // Sign into Firebase using popup auth & Google as the identity provider.
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    console.log("signed in");
  }

  {
    /*
  function signUp() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }
*/
  }
  function signOut() {
    // Sign out of Firebase.
    firebase.auth().signOut();
    console.log(firebase.auth());
  }

  return (
    <>
      <div onClick={handleShow}>SignUp</div>

      {/* Modal header */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header id="ModalTitle">
          <Modal.Title>Create Your Free Account!</Modal.Title>
        </Modal.Header>

        {/* Modal Body */}

        <Modal.Body>
          <div className="container-fluid">
            <div className="row justify-content-center" id="signIn">
              <div className="col-2 col-sm-2 col-md-2 p-0 my-auto text-center">
                <img src={emailPic} alt="email" border="0" />
              </div>
              <div className=" col-10 col-sm-10 col-md-10 p-0 ">
                <input
                  type="text"
                  name="report"
                  placeholder="Email"
                  className="ModalBody"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div className="row justify-content-center">
              <div className="col-2 col-sm-2 col-md-2 p-0 my-auto text-center">
                <img src={password} alt="password" border="0" />
              </div>
              <div className="col-10 col-sm-10 col-md-10 p-0 my-auto mx-auto ">
                <input
                  type="text"
                  name="report"
                  placeholder="Password"
                  className="ModalBody"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div className="row justify-content-center">
              <div className="col-2 col-sm-2 col-md-2 p-0 my-auto text-center">
                <img src={password} alt="password" border="0" />
              </div>
              <div className="col-10 col-sm-10 col-md-10 p-0 my-auto mx-auto ">
                <input
                  type="text"
                  name="report"
                  placeholder="ConfirmPassword"
                  className="ModalBody"
                  onChange={(e) => setComfPass(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 text-center">
                <Button id="SignInButton">Sign Up</Button>
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
        <Modal.Footer id="ModalFooter">
          <Container>
            <div className="row text-center">
              <a href="#" onClick={handleClose}>
                <p>No thanks, I will continue as a guest</p>
              </a>
            </div>
            <div className="row text-center">
              <p>Already have an account?</p>
              <a
                href="#"
                onClick={() => {
                  // props.showSignIn();
                  handleClose();
                  signIn();
                  // initFirebaseAuth();
                  // getProfilePicUrl();
                  // getUserName();
                  // isUserSignedIn();
                }}
              >
                <p>Sign in</p>
              </a>
            </div>
            <a
              href="#"
              onClick={() => {
                signOut();
              }}
            >
              <p>Sign out</p>
            </a>
            {/* <a
              href="#"
              onClick={() => {
                signUp();
              }}
            >
              <p>Sign up</p>
            </a> */}
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Sign_up;
