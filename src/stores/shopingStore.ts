import { makeAutoObservable } from 'mobx';

import { ShopingItem } from '../models/ShopingItem';

class ShopingStore {
  public items: ShopingItem[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  addItem(name: string, quantity: number) {
    const newItem = new ShopingItem({ id: Date.now(), name, quantity, purchased: false });
    this.items.push(newItem);
  }

  removeItem(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }
}

export const shopingStore = new ShopingStore();
