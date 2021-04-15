import { action, computed, observable } from "mobx";
import { apiStatus } from "../../constants/ApiStatusConstants";
// import productsData from "../../server/products/index.get.json";

class ProductsStore {
  @observable id = "all";
  @observable dataFetchService;
  @observable offersData = [];
  @observable offersDataApiStatus;
  @observable offersDataApiError;
  @observable categoriesData = [];
  @observable categoriesDataApiStatus;
  @observable categoriesDataApError;
  @observable productsData = [];
  @observable productsDataApiStatus;
  @observable productsDataApiError;

  constructor(dataFetchService) {
    this.dataFetchService = dataFetchService;
  }

  @action.bound updateProductsData(productId) {
    // console.log(productId, ">>", this.id);
    if (productId === "all") this.id = "all";
    else this.id = productId;
  }

  @computed get filteredProductsData() {
    if (this.id === "all") return this.productsData;
    const resultData = this.productsData.filter(
      (eachProduct) => eachProduct.category === this.id
    );
    // console.log(resultData, "???");
    return resultData;
  }

  @action.bound offersDataApi() {
    const offersDataFetchRequest = this.dataFetchService.getOffersData();
    this.offersDataApiStatus = apiStatus.loading;

    offersDataFetchRequest
      .then((res) => res.json())
      .then((data) => {
        this.offersDataApiStatus = apiStatus.completed;
        this.offersData = data;
      })
      .catch((err) => {
        // console.log("error");
        this.offersDataApiStatus = apiStatus.error;
      });
  }

  @action.bound categoriesDataApi() {
    const categoriesDataFetchRequest = this.dataFetchService.getCategoriesData();
    this.categoriesDataApiStatus = apiStatus.loading;

    categoriesDataFetchRequest
      .then((res) => res.json())
      .then((data) => {
        this.categoriesDataApiStatus = apiStatus.completed;
        this.categoriesData = data;
        // console.log(this.categoriesData, "&&&");
      })
      .catch((err) => {
        this.categoriesDataApiStatus = apiStatus.error;
      });
  }

  @action.bound productsDataApi() {
    const productsDataFetchRequest = this.dataFetchService.getProductsData();
    this.productsDataApiStatus = apiStatus.loading;

    productsDataFetchRequest
      .then((res) => res.json())
      .then((data) => {
        this.productsDataApiStatus = apiStatus.completed;
        this.productsData = data;
      })
      .catch((err) => {
        this.productsDataApiStatus = apiStatus.error;
      });
  }
}

export default ProductsStore;
