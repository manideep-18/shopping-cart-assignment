import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";
import { PrivateRoute } from "./utils/PrivateRoute";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/register" component={RegisterPage} />
          <Route path="/signin" component={SignInPage} />
          <PrivateRoute path="/" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
