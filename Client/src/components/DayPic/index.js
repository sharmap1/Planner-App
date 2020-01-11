import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const DayPic = () => {
  const [quote, setJoke] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://api.paperquotes.com/apiv1/quotes/?limit=1&offset=1&order=-likes&order=%3F&tags=flower%2Csun"
      );
      // console.log(result.data);
      setJoke(`${result.data[0].quote} ${result.data[0].author}`);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="pic-card">
        <p>{quote}</p>
        <p>“Be yourself; everyone else is already taken.” ― Oscar Wilde</p>
      </div>
    </>
  );
};
export default DayPic;
