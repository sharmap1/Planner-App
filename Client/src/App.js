import React from "react";
<<<<<<< HEAD
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../src/components/Nav"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
=======
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
>>>>>>> dac85c16a4624788e1dca830f11fff2d95d17f66
import FunPage from "./pages/FunPage";
import ThreeDay from "./pages/ThreeDay";
import NoMatch from "./pages/NoMatch";
<<<<<<< HEAD
import Credits from "./pages/Credits";
=======
import Footer from "./components/Footer";
>>>>>>> dac85c16a4624788e1dca830f11fff2d95d17f66

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={ThreeDay} />
          <Route exact path="/funpage" component={FunPage} />
          <Route exact path="/threeday" component={ThreeDay} />
<<<<<<< HEAD
          <Route exact path="/credits" component={Credits} />
          <Route exact path="*" component={NoMatch}/>
=======
          <Route exact path="*" component={NoMatch} />
>>>>>>> dac85c16a4624788e1dca830f11fff2d95d17f66
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
