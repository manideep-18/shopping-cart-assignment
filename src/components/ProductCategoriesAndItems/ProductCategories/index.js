import { inject, observer } from "mobx-react";
import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./styles.scss";

@observer
class ProductCategories extends React.Component {
  render() {
    const { history, productsStore } = this.props;
    return (
      <nav className="categoriesListStyles">
        <ul>
          <li>
            <button
              onClick={() => {
                history.push("/products/fruit-and-veg");
                productsStore.updateProductsData("5b6899953d1a866534f516e2");
              }}
            >
              {"Fruits & Vegetables"}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                history.push("/products/bakery-cakes-dairy");
                productsStore.updateProductsData("5b6899123d1a866534f516de");
              }}
            >
              {"Bakery Cakes and Dairy"}
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                history.push("/products/beverages");
                productsStore.updateProductsData("5b675e5e5936635728f9fc30");
              }}
            >
              {"Beverages"}
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                history.push("/products/beauty-hygiene");
                productsStore.updateProductsData("5b68994e3d1a866534f516df");
              }}
            >
              {"Beauty and Hygiene"}
            </button>
          </li>

          <li>
            <button
              onClick={() => {
                history.push("/products/baby");
                productsStore.updateProductsData("5b6899683d1a866534f516e0");
              }}
            >
              {"Baby Care"}
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(ProductCategories);
