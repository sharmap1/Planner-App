import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";
import { set } from "mongoose";

const DayJoke = () => {
  const [joke, setJoke] = useState("");
  const [fetching, setFetching] = useState("false");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general"
      );
      // console.log(result.data);
      setJoke(`${result.data[0].setup} ${result.data[0].punchline}`);
    };
    fetchData();
  }, [fetching]);

  return (
    <>
      <Col md="12">
        <Card.Body className="joke-card">
          <Card.Img
            className="card-img"
            variant="top"
            src="https://i.ytimg.com/vi/y-VILY1x6RM/hqdefault.jpg"
          />
          <Card.Header as="h5">My Jokes</Card.Header>
          <p style={{ margin: "20px" }}>{joke}</p>
          {/* <DayJoke /> */}
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
export default DayJoke;
