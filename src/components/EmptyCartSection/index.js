import React from "react";
import { withRouter } from "react-router";

import closeIcon from "../../static/images/PngItem.png";
import "./styles.scss";

class EmptyCartSection extends React.Component {
  render() {
    const { handleModal, history, productsStore } = this.props;
    return (
      <div className="modalMainContainer">
        <div className="topContainer">
          <span className="headingStyles">My Cart</span>
          <button
            className="closeIconButtonStyles"
            onClick={() => {
              handleModal();
            }}
          >
            <img src={closeIcon} alt="close icon" />
          </button>
        </div>
        <div className="emptyModalTextsContainer">
          <h3>No items in your cart</h3>
          <span>Your favourite items are just a click away</span>
        </div>
        <button
          className="shoppingButtonStyles"
          onClick={() => {
            history.push("/products/all");
            productsStore.updateProductsData("all");
            handleModal();
          }}
        >
          Start Shopping
        </button>
      </div>
    );
  }
}

export default withRouter(EmptyCartSection);
