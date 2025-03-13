import { makeAutoObservable } from "mobx";

export class ShoppingItem {
  id;
  name;
  quantity;
  purchased;

  constructor(id: number, name: string, quantity: number, purchased = false) {
    makeAutoObservable(this);
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.purchased = purchased;
  }

  togglePurchased = () => {
    console.log(this.purchased);
    this.purchased = !this.purchased;
  };
}
