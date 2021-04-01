import React from "react";
import CategoriesSection from "../../components/CategoriesSection";
import Header from "../../components/Header";
import OffersSlick from "../../components/OffersSlick";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <OffersSlick />
        <CategoriesSection />
      </div>
    );
  }
}

export default HomePage;
