import { inject, observer } from "mobx-react";
import React from "react";
import Header from "../../components/Header";
import MobileProductItems from "../../components/MobileProductItems";
import ProductCategoriesAndItems from "../../components/ProductCategoriesAndItems";

@inject("productsStore")
@observer
class ProductsPage extends React.Component {
  render() {
    const { productsStore } = this.props;
    return (
      <div>
        <Header />
        <MobileProductItems productsStore={productsStore} />
        <ProductCategoriesAndItems productsStore={productsStore} />
      </div>
    );
  }
}

export default ProductsPage;
