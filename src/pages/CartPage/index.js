import React from "react";
import CartItemsLandingSection from "../../components/CartItemsLandingSection";
import Header from "../../components/Header";

class CartPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <CartItemsLandingSection />
      </div>
    );
  }
}

export default CartPage;
