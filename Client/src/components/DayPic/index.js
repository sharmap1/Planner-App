import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";

const DayPic = () => {
  const [giphy, setImage] = useState("");
  const [fetching, setFetching] = useState("false");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.giphy.com/v1/gifs/search?q=animals&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=1000"
      );

      let random = Math.floor(Math.random() * 1000);

      setImage(`${result.data.data[random].images.downsized_large.url}`);
    };
    fetchData();
  }, [fetching]);

  return (
    <>
      {/* <Col md={{ span: 3, offset: 0 }}> */}
      <Col md="12">
        <Card.Body className="pic-card">
          <Card.Img variant="top" src={giphy} />
          <Card.Header as="h5">My Giphy</Card.Header>
          <p>Giphy pictures to refresh your day!</p>
          <button
            onClick={() => setFetching(!fetching)}
            className="btn btn-success"
          >
            next
          </button>
        </Card.Body>
      </Col>
    </>
  );
};
export default DayPic;

// var queryURL =
//   "https://api.giphy.com/v1/gifs/search?q=" +
//   animal +
//   "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
