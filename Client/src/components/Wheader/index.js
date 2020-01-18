import React from "react";
import "./style.css";
import Nav from "../Nav";

export class Wheader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRightNow: "",
      d: "",
      day: "",
      bahar: "",
      keyword: ""
    };
  }

  componentDidMount() {
    var currentTime = new Date();

    setInterval(() => {
      var currentTime = new Date();

      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var outside = "";

      if (hours < 5) {
        outside = " Get Some Sleep!";
      } else if (hours < 12) {
        outside = " Morning";
      } else if (hours < 16) {
        outside = " Noon";
      } else if (hours < 20) {
        outside = " Evening";
      } else if (hours <= 23) {
        outside = " Night";
      } else {
        outside = "";
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      var v = hours + ":" + minutes;
      this.setState({
        timeRightNow: v,
        bahar: outside
      });
    }, 1000);

    var day = currentTime.getDate();
    var month = currentTime.getMonth() + 1;
    var year = currentTime.getFullYear();
    var din = currentTime.getDay();
    var days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];

    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    var d = month + "-" + day + "-" + year;
    this.setState({
      d: d,
      day: " " + days[din]
    });
  }

  render() {
    return (
      <div>
        <p style={{ margin: "20px" }}>SEATTLE</p>
        {/* <Nav /> */}
        <div className="cell datetime" style={{ margin: "20px" }}>
          <div className="dates_line">
            <p className="time">{this.state.bahar}</p>
            <p> &nbsp;{this.state.timeRightNow}</p>
            <p className="time">{this.state.day} </p>
            <p>&nbsp;{this.state.d}</p>
          </div>
          {/* <div className="time_line">
                       </span>
                    </div> */}
        </div>
        <div className="salutation cell">
          <div className="name">
            <span> {this.props.nam} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Wheader;
