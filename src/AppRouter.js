import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./components/Container";
import Uses from "./components/Uses";
import Sponsor from "./components/Sponsor";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Container />
          </Route>
          <Route exact path="/uses">
            <Uses />
          </Route>
          <Route exact path="/support">
            <Sponsor />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
