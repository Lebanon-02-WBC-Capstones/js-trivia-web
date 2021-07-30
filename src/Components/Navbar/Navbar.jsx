import React from "react";
import "../../App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";
export default function NavBar() {
  return (
    <div>
      <Navbar id="Navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home" id="PLay">
              Play
            </Nav.Link>
            <Nav.Link href="#Create" id="Create">
              Create
            </Nav.Link>
            <Nav.Link href="#About" id="About">
              About Us
            </Nav.Link>
            <Nav.Link href="#Username" id="Username">
              Username
            </Nav.Link>
            <Person />
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
