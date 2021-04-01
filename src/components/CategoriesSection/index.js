import React from "react";

import categoriesData from "../../server/categories/index.get.json";
import { ascendingOrderAlphabetical } from "../../utils/SortingDataUtils";

import "./styles.scss";

class CategoriesSection extends React.Component {
  render() {
    let baseImageUrl = require.context("../../static/images/category", true);
    console.log(baseImageUrl("./baby.png"));
    return (
      <div className="responsiveContainer">
        <div className="categoriesContainer">
          {ascendingOrderAlphabetical(categoriesData, "order").map(
            ({ imageUrl, name, order, description, key }) => {
              if (order > 0)
                return (
                  <div className="imageTextContainer" key={name}>
                    <div className="imageContainer">
                      <img
                        className="categoryImageStyles"
                        src={baseImageUrl(imageUrl).default}
                        alt={name}
                      />
                    </div>
                    <div className="textsContainer">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a
                        className="exploreButtonStyles"
                        href={`/products/${key}`}
                        role="button"
                      >
                        Explore {key}
                      </a>
                    </div>
                  </div>
                );
              else {
                return null;
              }
            }
          )}
        </div>
      </div>
    );
  }
}

export default CategoriesSection;
