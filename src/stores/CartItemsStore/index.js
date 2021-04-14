import { action, observable, computed } from "mobx";
import { apiStatus } from "../../constants/ApiStatusConstants";

import productsData from "../../server/products/index.get.json";
import CartItemModal from "../Modal/CartItemModal";

class CartItemsStore {
  @observable cartItems = [];
  @observable dataFetchService;
  @observable onAddItemtoCartApiStatus;
  @observable onAddItemtoCartApiError;
  @observable onAddItemToCartSuccessMsg;

  constructor(dataFetchService) {
    this.dataFetchService = dataFetchService;
  }

  @action.bound addItem(id) {
    const addedItem = productsData.filter(
      (eachProduct) => eachProduct.id === id
    );

    let i;
    for (i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].itemId === id) {
        this.cartItems[i].incrementUnits();
        break;
      }
    }

    if (i === this.cartItems.length) {
      const item = new CartItemModal(
        addedItem[0].id,
        addedItem[0].name,
        addedItem[0].price,
        addedItem[0].imageURL
      );
      this.cartItems.push(item);
    }
  }

  @action.bound onAddItemtoCartApi(
    id,
    onSuccess: () => {},
    onFailure: () => {}
  ) {
    const data = { productId: id };

    this.onAddItemtoCartApiStatus = apiStatus.loading;

    const addItemToCartFetchRequest = this.dataFetchService.onAddItemtoCart(
      data
    );

    addItemToCartFetchRequest
      .then((res) => res.json())
      .then((data) => {
        this.addItem(id);
        this.onAddItemToCartSuccessMsg = data.responseMessage;
        this.onAddItemtoCartApiStatus = apiStatus.completed;
        onSuccess();
      })
      .catch((err) => {
        console.log(err, "error");
        this.onAddItemtoCartApiStatus = apiStatus.error;
        this.onAddItemtoCartApiError = err;
        onFailure();
      });
  }

  @action.bound removeItem(id) {
    let i;

    for (i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].itemId === id) {
        this.cartItems[i].decrementUnits();
        break;
      }
    }

    if (this.cartItems[i].units === 0)
      this.cartItems = this.cartItems.filter(
        (eachItem) => eachItem.itemId !== id
      );
  }

  @computed get totalCartItemsPrice() {
    let sum = 0;
    this.cartItems.forEach(
      (eachItem) => (sum = sum + eachItem.itemPrice * eachItem.units)
    );

    return sum;
  }

  @computed get totalCartItems() {
    let sum = 0;
    this.cartItems.forEach((eachItem) => (sum = sum + eachItem.units));

    return sum;
  }
}

export default CartItemsStore;
