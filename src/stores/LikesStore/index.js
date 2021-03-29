import { observable, action } from "mobx";

class LikesStore {
  @observable likesCount = 12;

  @action.bound updateCount() {
    this.likesCount++;
  }
}

export default LikesStore;
