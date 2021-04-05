import { Provider } from "mobx-react";
import React from "react";

import "./App.scss";
import Routes from "./Routes";
import CartItemsStore from "./stores/CartItemsStore";
import LikesStore from "./stores/LikesStore";
import ProductsStore from "./stores/ProductsStore";

const productsStore = new ProductsStore();
const cartItemsStore = new CartItemsStore();

class App extends React.Component {
  render() {
    return (
      <Provider productsStore={productsStore} cartItemsStore={cartItemsStore}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
