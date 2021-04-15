import { inject, observer } from "mobx-react";
import React from "react";
import Footer from "../../common/Footer";

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
        <Footer />
      </div>
    );
  }
}

export default ProductsPage;
