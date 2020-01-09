import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavDropdownExample() {
  return (
    <>
      <Nav className="Navbar">
        <Nav.Item>
          <Nav.Link eventKey="1" href="#/home">
            My Planner
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" title="Item">
            My Daily TODO
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Week View" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Week-1</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Week-2</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Week-3</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">Week-4</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Month View" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">January</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">February</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">March</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">April</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.5">May</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.6">June</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.1">July</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">August</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">September</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">October</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.5">November</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.6">December</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </>
  );
}
export default NavDropdownExample;
