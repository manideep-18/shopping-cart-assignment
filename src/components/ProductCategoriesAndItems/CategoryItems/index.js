import React from "react";

import itemsData from "../../../server/products/index.get.json";

import "./styles.scss";

class CategoryItems extends React.Component {
  render() {
    let imageUrl = require.context("../../../static/images/products", true);
    return (
      <div className="itemsContainer">
        {itemsData.map((eachItem) => (
          <div className="eachItemContainer" key={eachItem.id}>
            <h3>{eachItem.name}</h3>
            <img
              className="itemImageStyles"
              src={imageUrl(eachItem.imageURL).default}
              alt={eachItem.name}
            />
            <p>{eachItem.description}</p>
            <div className="textButtonContainer">
              <span>MRP Rs.{eachItem.price}</span>
              <button className="buyNowButtonStyles">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CategoryItems;
