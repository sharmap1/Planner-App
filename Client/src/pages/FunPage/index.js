import React from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DayJoke from "../../components/DayJoke";
import DayQuote from "../../components/DayQuote";
import DayPic from "../../components/DayPic";
import DayWeather from "../../components/DayWeather";
import { Col, Row, Container } from "react-bootstrap";

function FunPage() {
  return (
    <main className="App">
      <Container fluid>
        <Row>
          <Col md="3">
            <DayQuote />
          </Col>
          <Col md="3">
            <DayJoke />
          </Col>
          <Col md="3">
            <DayPic />
          </Col>
          <Col md="3">
            <DayWeather />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default FunPage;
