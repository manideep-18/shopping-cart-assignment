import { inject, observer } from "mobx-react";
import React from "react";

import "./styles.scss";

@inject("cartItemsStore")
@observer
class CartItemsLandingSection extends React.Component {
  render() {
    const { cartItemsStore } = this.props;

    let imageUrl = require.context("../../../static/images/products", true);

    return (
      <div className="itemsLandingContainer">
        <div className="responsiveContainer">
          <div className="headingContainer">
            <h3>
              My Cart<span>({cartItemsStore.cartItems.length} items)</span>
            </h3>
          </div>
          <div className="cartItemsContainer">
            {cartItemsStore.cartItems.map((eachItem) => {
              if (eachItem.units > 0)
                return (
                  <div className="eachCartItemContainer" key={eachItem.itemId}>
                    <img
                      className="cartItemImageStyles"
                      src={imageUrl(eachItem.itemImgUrl).default}
                      alt={eachItem.itemName}
                    />
                    <div className="priceContainer">
                      <div className="itemNameUnitsContainer">
                        <h3>{eachItem.itemName}</h3>
                        <div className="unitsContainer">
                          <button
                            onClick={() => {
                              cartItemsStore.removeItem(eachItem.itemId);
                            }}
                          >
                            -
                          </button>
                          <span>{eachItem.units}</span>
                          <button
                            onClick={() => {
                              cartItemsStore.addItem(eachItem.itemId);
                            }}
                          >
                            +
                          </button>
                          <span>x</span>
                          <span>{eachItem.itemPrice}</span>
                        </div>
                      </div>
                      <span>{eachItem.itemPrice * eachItem.units}</span>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CartItemsLandingSection;
