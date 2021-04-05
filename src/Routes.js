import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";
import { PrivateRoute } from "./utils/PrivateRoute";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/cart" component={CartPage} />
          <Route path="/products/:id" component={ProductsPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/signin" component={SignInPage} />
          <PrivateRoute path="/" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
