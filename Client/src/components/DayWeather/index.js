import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";
import { WiFahrenheit, WiDayRain } from "react-icons/wi";
import Header from "../Header";

const DayWeather = () => {
  const [weather, setWeather] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://api.openweathermap.org/data/2.5/weather?q=Seattle,Washington&units=imperial&appid=166a433c57516f51dfab1f7edaed8413"
      );
      console.log("result", result.data);
      setWeather(`${result.data.weather["0"].main}, ${result.data.main.temp}`);
      // setMaxmin(`${result.data.main.temp_max}, ${result.data.main.temp_min}`);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <Col md={{ span: 3, offset: 0 }}> */}
      <Col md="12">
        <Card.Body className="weather-card">
          <Card.Img
            variant="top"
            src="https://cdn3.iconfinder.com/data/icons/bebreezee-weather-symbols/690/icon-weather-sunrainheavy-512.png"
          />
          <Card.Header as="h5">My Weather</Card.Header>

          <p>
            <Header />
            <p>
              {weather}
              <WiFahrenheit className="weather-btn" />
            </p>
            {/* Latest update and information on weather */}
          </p>
          {/* </Card.Header> */}
        </Card.Body>
      </Col>
    </>
  );
};
export default DayWeather;

// "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&units=imperial&appid="
