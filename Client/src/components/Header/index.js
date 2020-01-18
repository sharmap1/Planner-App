import React from "react";
import ReactDOM from "react-dom";

export class Header extends React.Component {
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
        outside = " GET SOME SLEEP!";
      } else if (hours < 12) {
        outside = " MORNING";
      } else if (hours < 16) {
        outside = " NOON";
      } else if (hours < 20) {
        outside = " EVENING";
      } else if (hours <= 23) {
        outside = " NIGHT";
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
    var month = currentTime.getMonth();
    var year = currentTime.getFullYear();
    var din = currentTime.getDay();
    var days = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY"
    ];

    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    var d = day + "-" + month + "-" + year;
    this.setState({
      d: d,
      day: " " + days[din]
    });
  }

  render() {
    return (
      <div className="header">
        <div className="cell datetime">
          <div className="date_line">
            &nbsp;{this.state.d}
            <span className="dull2">{this.state.day}</span>
          </div>
          <div className="time_line">
            &nbsp;{this.state.timeRightNow}{" "}
            <span className="dull2">{this.state.bahar}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
