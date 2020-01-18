import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";

const DaySports = () => {
  return (
    <>
      {/* <Col md={{ span: 3, offset: 0 }}> */}
      <Col md="12">
        <Card.Body className="sport-card">
          <Card.Img
            variant="top"
            src="http://d.christiantoday.com/en/full/35788/seattle-seahawks-russell-wilson.jpg"
          />
          <Card.Header as="h5">My Sports</Card.Header>
          <p>Latest updates and news about sports</p>
        </Card.Body>
      </Col>
    </>
  );
};

export default DaySports;
