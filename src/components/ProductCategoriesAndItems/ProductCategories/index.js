import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

class ProductCategories extends React.Component {
  render() {
    return (
      <nav className="categoriesListStyles">
        <ul>
          <li>
            <a href="/products/fruit-and-veg">{"Fruits & Vegetables"}</a>
          </li>
          <li>
            <a href="/products/bakery-cakes-dairy">
              {"Bakery Cakes and Dairy"}
            </a>
          </li>

          <li>
            <a href="/products/beverages">{"Beverages"}</a>
          </li>

          <li>
            <a href="/products/beauty-hygiene">{"Beauty and Hygiene"}</a>
          </li>

          <li>
            <a href="/products/baby">{"Baby Care"}</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default ProductCategories;
