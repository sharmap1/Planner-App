import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";

const DayJoke = () => {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general"
      );
      // console.log(result.data);
      setJoke(`${result.data[0].setup} ${result.data[0].punchline}`);
    };
    fetchData();
  }, []);

  return (
    <>
      <Col md={{ span: 3, offset: 0 }}>
        <Card.Body className="joke-card">
          <Card.Img
            variant="top"
            src="https://i.ytimg.com/vi/y-VILY1x6RM/hqdefault.jpg"
          />
          <Card.Header as="h5">My Jokes</Card.Header>
          <p>{joke}</p>
          {/* <DayJoke /> */}
        </Card.Body>
      </Col>
    </>
  );
};
export default DayJoke;
