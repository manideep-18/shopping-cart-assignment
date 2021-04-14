import ProductsStore from ".";
import AllDataFixtureFetchService from "../../services/AllDataFetchService/index.fixture";

describe("Product Store test cases", () => {
  let service, productStore;
  beforeEach(() => {
    service = new AllDataFixtureFetchService();
    productStore = new ProductsStore(service);
  });

  it("should check offersDataApi functionality", () => {
    expect(productStore.offersData.length).toHaveLength(0);
  });
});
