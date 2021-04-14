import { Provider } from "mobx-react";
import React from "react";

import "./App.scss";
import Routes from "./Routes";
import AllDataApiFetchService from "./services/AllDataFetchService/index.api";
import CartItemsStore from "./stores/CartItemsStore";
import LikesStore from "./stores/LikesStore";
import ProductsStore from "./stores/ProductsStore";

const allDataFetchService = new AllDataApiFetchService();
const productsStore = new ProductsStore(allDataFetchService);
const cartItemsStore = new CartItemsStore(allDataFetchService);

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
