import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { PrivateRoute } from "./utils/PrivateRoute";

const Header = React.lazy(() => import("./common/Header"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const ProductsPage = React.lazy(() => import("./pages/ProductsPage"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage"));
const SignInPage = React.lazy(() => import("./pages/SignInPage"));

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Header />
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
