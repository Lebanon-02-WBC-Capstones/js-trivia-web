import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";
import Sign_up from "../Modals/Sign_up";
import Sign_in from "../Modals/Sign_in";

export default function NavBar() {
  const [user, setUser] = useState();
  const [signIn, setSingIn] = useState(false);

  function showSignIn() {
    setSingIn((prev) => !prev);
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
              <Link to="/quizzes" style={{ all: "unset" }}>
                Play
              </Link>
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
              {user ? "username" : <Sign_up showSignIn={showSignIn} />}
              <Sign_in show={signIn} showSignIn={showSignIn} />
            </Nav.Link>
            <Person />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
