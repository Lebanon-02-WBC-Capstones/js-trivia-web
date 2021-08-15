import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";
import Sign_up from "../Modals/Sign_up";
import Sign_in from "../Modals/Sign_in";
import { auth } from "../../Firebase";
import { HashLink } from "react-router-hash-link";
import userimg from "../../assets/pictures/userimg.png";
/* eslint-disable no-debugger, no-console */

export default function NavBar() {
  const [user, setUser] = useState(null);
  const [signIn, setSingIn] = useState(false);

  function showSignIn() {
    setSingIn((prev) => !prev);
  }

  //to show the user
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const user = {
          uid: userAuth.uid,
          email: userAuth.email,
          photo: userAuth.photoURL,
        };
        //console.log(userAuth);
        console.log("Sign-in provider: " + userAuth.providerId);
        // console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + userAuth.displayName);
        console.log("  Email: " + userAuth.email);
        console.log("  Photo URL: " + userAuth.photoURL);
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  //sign out
  function signOut() {
    return auth.signOut();
  }

  return (
    <div>
      <Navbar id="Navbar" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="a">
              Logo
            </Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link id="Play">
              <HashLink to="/#categories" style={{ all: "unset" }}>
                Play
              </HashLink>
            </Nav.Link>
            <Nav.Link id="Create">
              <Link to="/create" style={{ all: "unset" }}>
                Create
              </Link>
            </Nav.Link>
            <Nav.Link id="About">
              <Link to="/about" style={{ all: "unset" }}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link id="Username">
              {user ? (
                <div id="user-container">
                  <img
                    src={auth.currentUser.photoURL || userimg}
                    id="user-pic"
                  />

                  <Link
                    to={{ pathname: "/profile/" + user.uid, state: user }}
                    id="user-name"
                    style={{ all: "unset" }}
                  >
                    {auth.currentUser.displayName}
                  </Link>
                  <button
                    onClick={signOut}
                    className="btn btn-primary"
                    id="signOut"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Sign_up showSignIn={showSignIn} />
              )}
              <Sign_in show={signIn} showSignIn={showSignIn} />
            </Nav.Link>
            {/* <Person /> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
