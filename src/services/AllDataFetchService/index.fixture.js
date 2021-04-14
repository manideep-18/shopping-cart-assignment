import bannersData from "../../../server/banners/index.get.json";
import categoriesData from "../../../server/categories/index.get.json";
import productsData from "../../../server/products/index.get.json";

class AllDataFixtureFetchService {
  getOffersData = () => {
    return bannersData;
  };

  getCategoriesData = () => {
    return categoriesData;
  };

  getProductsData = () => {
    return productsData;
  };
}

export default AllDataFixtureFetchService;
