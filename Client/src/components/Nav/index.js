import React from "react";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";

import "./style.css";

function NavDropdownExample() {
  return (
    <>
      <Navbar bg="info" variant="info">
        <Navbar.Brand href="/">My Planner</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="ThreeDay">My Three Day Planner</Nav.Link>
          <Nav.Link href="FunPage">My Fun Page</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
export default NavDropdownExample;
