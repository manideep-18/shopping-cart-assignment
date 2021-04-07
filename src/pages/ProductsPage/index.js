import { inject, observer } from "mobx-react";
import React from "react";

import MobileProductsDropdown from "../../components/MobileProductsDropdown";
import ProductCategoriesAndItems from "../../components/ProductCategoriesAndItems";

@inject("productsStore")
@observer
class ProductsPage extends React.Component {
  render() {
    const { productsStore } = this.props;
    return (
      <div>
        <MobileProductsDropdown productsStore={productsStore} />
        <ProductCategoriesAndItems productsStore={productsStore} />
      </div>
    );
  }
}

export default ProductsPage;
