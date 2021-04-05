import { action, observable } from "mobx";

class CartItemModal {
  itemId;
  itemPrice;
  itemName;
  itemImgUrl;
  @observable units;

  constructor(id, name, price, imgUrl) {
    this.itemId = id;
    this.itemName = name;
    this.itemPrice = price;
    this.itemImgUrl = imgUrl;
    this.units = 1;
  }

  @action.bound incrementUnits() {
    this.units = this.units + 1;
  }

  @action.bound decrementUnits() {
    this.units = this.units - 1;
  }
}

export default CartItemModal;
