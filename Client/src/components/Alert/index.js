import React from "react";

const Alert = ({ type, text }) => {
  return (
    <>
      {/* <Container>
        <Row>
          <Col xs={12} md={6}> */}
      {/* <li> */}
      <div>
        <span className={`alert alert-${type}`}>{text}</span>
      </div>
      {/* </li> */}
      {/* </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default Alert;
