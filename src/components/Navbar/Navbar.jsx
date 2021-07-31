import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";
//import from ""
export default function NavBar() {
  return (
    <div>
      <Navbar id="Navbar" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ all: "unset" }}>
              Logo
            </Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link id="Play">
              <Link to="/quizes" style={{ all: "unset" }}>
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
              <Link to="/profile/0" style={{ all: "unset" }}>
                Username
              </Link>
            </Nav.Link>
            <Person />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
