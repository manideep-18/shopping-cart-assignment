import React from "react";
import CategoriesSection from "../../components/CategoriesSection";
import OffersSlick from "../../components/OffersSlick";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <OffersSlick />
        <CategoriesSection />
      </div>
    );
  }
}

export default HomePage;
