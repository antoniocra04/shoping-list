import { makeAutoObservable } from "mobx";
import { ShoppingItem } from "../utils";

class ShopingStore {
  items: ShoppingItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem(name: string, quantity: number) {
    const newItem = new ShoppingItem(Date.now(), name, quantity);
    this.items.push(newItem);
  }

  removeItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}

export const shopingStore = new ShopingStore();
