import React from "react";
import Header from "../../components/Header";
import ProductCategoriesAndItems from "../../components/ProductCategoriesAndItems";

class ProductsPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ProductCategoriesAndItems />
      </div>
    );
  }
}

export default ProductsPage;
