import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FunPage from "./pages/FunPage";
import ThreeDay from "./pages/ThreeDay"
import NoMatch from "./pages/NoMatch";

function App () {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={ThreeDay} />
          <Route exact path="/funpage" component={FunPage} />
          <Route exact path="/threeday" component={ThreeDay} />
          <Route exact path="*" component={NoMatch}/>
        </Switch>
      </div>
    </Router>
    );
};

export default App;
