import { makeAutoObservable } from 'mobx';

interface ShopingItemProps {
  id: number;
  name: string;
  quantity: number;
  purchased: boolean;
}

export class ShopingItem {
  id;

  name;

  quantity;

  purchased;

  constructor({ id, name, quantity, purchased }: ShopingItemProps) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.purchased = purchased;
  }

  togglePurchased() {
    this.purchased = !this.purchased;
  }
}
