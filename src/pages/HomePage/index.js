import React from "react";
import Footer from "../../common/Footer";
import CategoriesSection from "../../components/CategoriesSection";
import OffersSlick from "../../components/OffersSlick";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <OffersSlick />
        <CategoriesSection />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
