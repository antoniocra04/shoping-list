import { action, makeObservable, observable } from 'mobx';

import { ModalWindow } from './ModalWindow';

export class AddItemModal extends ModalWindow {
  public name = '';

  public quantity = 0;

  constructor() {
    super();
    makeObservable(this, {
      name: observable,
      quantity: observable,
      setName: action,
      setQuantity: action
    });
  }

  setName(name: string) {
    this.name = name;
  }

  setQuantity(quantity: number) {
    if (Number.isInteger(quantity)) this.quantity = quantity;
  }
}
