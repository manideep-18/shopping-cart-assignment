import { Provider } from "mobx-react";
import React from "react";

import "./App.scss";
import Routes from "./Routes";
import LikesStore from "./stores/LikesStore";

const likesStore = new LikesStore();

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Routes />
      </Provider>
    );
  }
}

export default App;
