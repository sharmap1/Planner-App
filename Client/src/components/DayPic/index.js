import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";

const DayPic = () => {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://api.paperquotes.com/apiv1/quotes/?limit=1&offset=1&order=-likes&order=%3F&tags=flower%2Csun"
      );
      // console.log(result.data);
      setQuote(`${result.data[0].quote} ${result.data[0].author}`);
    };
    fetchData();
  }, []);

  return (
    <>
      <Col md={{ span: 3, offset: 0 }}>
        <Card.Body className="pic-card">
          <Card.Img
            variant="top"
            src="https://media.giphy.com/media/kreQ1pqlSzftm/giphy.gif"
          />
          <Card.Header as="h5">My Giphy</Card.Header>

          <p>
            {quote}
            Cute giphy images will be loaded to refresh the day
          </p>
          {/* </Card.Header> */}
        </Card.Body>
      </Col>
    </>
  );
};
export default DayPic;
