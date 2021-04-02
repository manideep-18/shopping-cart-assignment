import { Provider } from "mobx-react";
import React from "react";

import "./App.scss";
import Routes from "./Routes";
import LikesStore from "./stores/LikesStore";
import ProductsStore from "./stores/ProductsStore";

const productsStore = new ProductsStore();

class App extends React.Component {
  render() {
    return (
      <Provider productsStore={productsStore}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
