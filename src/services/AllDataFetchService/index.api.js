import axios from "axios";

import {
  addToCartUrl,
  categoriesUrl,
  offersUrl,
  productsUrl,
} from "../endpoints";

const baseUrl = "http://localhost:5000/";

class AllDataApiFetchService {
  getOffersData = () => {
    return fetch(`${baseUrl}${offersUrl}`);
  };

  getCategoriesData = () => {
    return fetch(`${baseUrl}${categoriesUrl}`);
  };

  getProductsData = () => {
    return fetch(`${baseUrl}${productsUrl}`);
  };

  onAddItemtoCart = (data) => {
    return fetch(`${baseUrl}${addToCartUrl}`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  };
}

export default AllDataApiFetchService;
