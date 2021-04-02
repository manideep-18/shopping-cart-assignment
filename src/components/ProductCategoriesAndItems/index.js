import React from "react";
import CategoryItems from "./CategoryItems";

import ProductCategories from "./ProductCategories";
import "./styles.scss";

class ProductCategoriesAndItems extends React.Component {
  render() {
    return (
      <div className="responsiveContainer">
        <div className="categoriesItemsContainer">
          <ProductCategories />
          <CategoryItems />
        </div>
      </div>
    );
  }
}

export default ProductCategoriesAndItems;
