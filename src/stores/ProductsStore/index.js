import { action, computed, observable } from "mobx";
import productsData from "../../server/products/index.get.json";

class ProductsStore {
  @observable id = "all";

  @action.bound updateProductsData(productId) {
    // console.log(productId, ">>", this.id);
    if (productId === "all") this.id = "all";
    else this.id = productId;
  }

  @computed get filteredProductsData() {
    if (this.id === "all") return productsData;
    const resultData = productsData.filter(
      (eachProduct) => eachProduct.category === this.id
    );
    // console.log(resultData, "???");
    return resultData;
  }
}

export default ProductsStore;
