import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "react-bootstrap/Nav";
import { Form, Button, Navbar } from "react-bootstrap";

import "./style.css";

function NavDropdownExample() {
  return (
    <>
      <Navbar bg="info" variant="info">
        <Navbar.Brand>My Planner</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">My TODO</Nav.Link>
          <Nav.Link href="/ fu">My Fun Page</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
export default NavDropdownExample;
