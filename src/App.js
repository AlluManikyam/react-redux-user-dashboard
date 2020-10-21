import React, { Component } from "react";
import "./App.css";
import LoginPage from "./containers/LoginPage";
import DashboardPage from "./containers/DashboardPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={DashboardPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
