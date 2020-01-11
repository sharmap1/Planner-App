import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const DayJoke = () => {
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
      <div className="quote-card">
        <p>{quote}</p>
        <p>“Life is trying things to see if they work.” – Ray Bradbury</p>
      </div>
    </>
  );
};
export default DayJoke;
