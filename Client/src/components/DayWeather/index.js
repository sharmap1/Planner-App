import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";
import { WiFahrenheit } from "react-icons/wi";
import Wheader from "../Wheader";

const DayWeather = () => {
  const [weather, setWeather] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      console.log("key", process.env.REACT_APP_WEATHER_KEY);
      const result = await axios(
        "https://api.openweathermap.org/data/2.5/weather?q=Seattle,Washington&units=imperial&appid=" +
          process.env.REACT_APP_WEATHER_KEY
      );
      console.log("result", result.data);
      setWeather(`${result.data.weather["0"].main}, ${result.data.main.temp}`);
    };
    fetchData();
  }, []);

  return (
    <Col md="12">
      <Card.Body className="weather-card">
        <Card.Img
          className="card-img"
          variant="top"
          src="https://cdn.dribbble.com/users/1761137/screenshots/3665783/dribbble.gif"
        />
        <Card.Header as="h5">My Weather</Card.Header>
        <p>
          <Wheader />
          <p style={{ margin: "20px", fontSize: "15px", fontWeight: "bold" }}>
            {weather}
            <WiFahrenheit className="weather-btn" />
          </p>
        </p>
      </Card.Body>
    </Col>
  );
};
export default DayWeather;
