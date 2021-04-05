import { action, observable } from "mobx";

import productsData from "../../server/products/index.get.json";
import CartItemModal from "../Modal/CartItemModal";

class CartItemsStore {
  @observable cartItems = [];

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
}

export default CartItemsStore;
