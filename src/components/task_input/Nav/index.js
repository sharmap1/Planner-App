import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavDropdownExample() {
  return (
    <>
      <Nav className="Navbar">
        <Nav.Item>
          <Nav.Link eventKey="1" href="#/home">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" title="Item">
            My Daily List
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="nav-dropdown">
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
// export default react-bootstrap/Nav;

// export default NavDropdownExample;
