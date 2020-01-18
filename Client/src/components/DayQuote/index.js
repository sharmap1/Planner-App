import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";

const DayQuote = () => {
  const [quote, setQuote] = useState("");
  const [fetching, setFetching] = useState("false");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.kanye.rest?format=text");
      // console.log(result.data);
      setQuote(`${result.data}`);
      // console.log("result", result);
    };

    fetchData();
  }, [fetching]);

  return (
    <>
      {/* <Col md={{ span: 3, offset: 0 }}> */}
      <Col md="12">
        <Card.Body className="quote-card">
          <Card.Img
            className="card-img"
            variant="top"
            src="http://beautyharmonylife.com/wp-content/uploads/2013/09/431217-1024x768-pine-island-800x600.jpg"
          />
          <Card.Header as="h5">My Quotes</Card.Header>

          <p style={{ margin: "20px" }}>{quote}</p>
          {/* </Card.Header> */}
          <button
            onClick={() => setFetching(!fetching)}
            className="btn btn-info"
          >
            next
          </button>
        </Card.Body>
      </Col>
    </>
  );
};
export default DayQuote;
