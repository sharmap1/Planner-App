import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";

import "./style.css";

function Footer() {
  return (
    <>
      <div className="text">
        <Navbar bg="info" variant="info">
          <p>&copy; Planner App 2020</p>
        </Navbar>
      </div>
    </>
  );
}
export default Footer;
