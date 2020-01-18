import React from "react";
import Nav from "react-bootstrap/Nav";
import { Form, Button, Navbar } from "react-bootstrap";

import "./style.css";

function NavDropdownExample() {
  return (
    <>
      <Navbar bg="info" variant="info">
        <Navbar.Brand>My Planner</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="ThreeDay">3-Day Planner</Nav.Link>
          <Nav.Link href="FunPage">Fun Page</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
export default NavDropdownExample;
