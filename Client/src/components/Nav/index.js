import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Form, Button, FormControl, Navbar } from "react-bootstrap";

import "./style.css";

function NavDropdownExample() {
  return (
    <>
      <Navbar bg="info" variant="info">
        <Navbar.Brand href="#home">My Planner</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">My TODO</Nav.Link>
          <Nav.Link href="#features">My Fun Page</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-light">Logout</Button>
        </Form>
      </Navbar>
    </>
  );
}
export default NavDropdownExample;
