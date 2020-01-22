import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FunPage from "./pages/FunPage";
import ThreeDay from "./pages/ThreeDay";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={ThreeDay} />
          <Route exact path="/funpage" component={FunPage} />
          <Route exact path="/threeday" component={ThreeDay} />
          <Route exact path="*" component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
