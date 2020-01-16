import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";

const DateSport = () => {
  return (
    <>
      {/* <Col md={{ span: 3, offset: 0 }}>
       */}
      <Col md="12">
        <Card.Body className="date-picker">
          <Card.Img
            variant="top"
            src="https://calendardiy.com/wp-content/uploads/2019/03/Free-Printable-Calendar-2020.png"
          />
          <Card.Header as="h5">My Date</Card.Header>
          <p>Set my important dates in calendar</p>
        </Card.Body>
      </Col>
    </>
  );
};

export default DateSport;
