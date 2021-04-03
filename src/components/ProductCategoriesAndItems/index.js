import { observer } from "mobx-react";
import React from "react";
import CategoryItems from "./CategoryItems";

import ProductCategories from "./ProductCategories";
import "./styles.scss";

@observer
class ProductCategoriesAndItems extends React.Component {
  render() {
    const { productsStore } = this.props;
    return (
      <div className="responsiveContainer">
        <div className="categoriesItemsContainer">
          <ProductCategories productsStore={productsStore} />
          <CategoryItems productsStore={productsStore} />
        </div>
      </div>
    );
  }
}

export default ProductCategoriesAndItems;
