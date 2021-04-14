import { inject, observer } from "mobx-react";
import React from "react";

import itemsData from "../../../server/products/index.get.json";
import { currentCategoryId } from "../../../utils/currentUrl";

import "./styles.scss";

@inject("cartItemsStore")
@observer
class CategoryItems extends React.Component {
  onFailureItemAddToCart = () => {
    const { cartItemsStore } = this.props;
    const { onAddItemtoCartApiError } = cartItemsStore;

    alert(onAddItemtoCartApiError);
  };

  onSuccessItemAddToCart = () => {
    const { cartItemsStore } = this.props;
    const { onAddItemToCartSuccessMsg } = cartItemsStore;

    alert(onAddItemToCartSuccessMsg);
  };

  handleBuyNowButtonClick = (id) => {
    const { cartItemsStore } = this.props;

    cartItemsStore.onAddItemtoCartApi(
      id,
      this.onSuccessItemAddToCart,
      this.onFailureItemAddToCart
    );
  };

  componentDidUpdate() {
    const { productsStore } = this.props;

    if (productsStore.categoriesData.length > 0) {
      const resultCategoryId = currentCategoryId(
        productsStore.categoriesData,
        window.location.href
      );
      // console.log(resultCategoryId, "??");
      productsStore.updateProductsData(resultCategoryId);
    }
  }

  componentDidMount() {
    const { productsStore } = this.props;

    productsStore.categoriesDataApi();
    productsStore.productsDataApi();
  }

  render() {
    let imageUrl = require.context("../../../static/images/products", true);

    return (
      <div className="itemsContainer">
        {this.props.productsStore.filteredProductsData.map((eachItem) => (
          <div className="eachItemContainer" key={eachItem.id}>
            <h3>{eachItem.name}</h3>
            <div className="imgTextsContainer">
              <img
                className="itemImageStyles"
                src={imageUrl(eachItem.imageURL).default}
                alt={eachItem.name}
              />
              <div className="buttonTextsContainer">
                <p>{eachItem.description}</p>
                <div className="textButtonContainer">
                  <span>MRP Rs.{eachItem.price}</span>
                  <button
                    className="buyNowButtonStyles"
                    onClick={() => {
                      this.handleBuyNowButtonClick(eachItem.id);
                    }}
                  >
                    Buy Now
                  </button>
                </div>
                <div className="textsContainerTwo">
                  <button
                    onClick={() => {
                      this.handleBuyNowButtonClick(eachItem.id);
                    }}
                  >
                    Buy Now @ MRP Rs.{eachItem.price}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CategoryItems;
