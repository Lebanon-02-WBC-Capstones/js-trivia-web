import React from "react";
import "../App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Person } from "react-bootstrap-icons";
export default function NavBar() {
    return (
        <div>
             <Navbar className="Navbar" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                        <Nav className="NavbarElements">
                            <Nav.Link href="#home">Play</Nav.Link>
                            <Nav.Link href="#Create">Create</Nav.Link>
                            <Nav.Link href="#About">About Us</Nav.Link>
                            <Nav.Link href="#Username">Username</Nav.Link>
                            <Person />
                        </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
