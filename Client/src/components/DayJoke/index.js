import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Card } from "react-bootstrap";

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
      <div className="joke-card">
        <p>{joke}</p>
      </div>
    </>
  );
};
export default DayJoke;
