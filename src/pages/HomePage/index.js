import React from "react";
import Header from "../../components/Header";
import OffersSlick from "../../components/OffersSlick";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <OffersSlick />
      </div>
    );
  }
}

export default HomePage;
