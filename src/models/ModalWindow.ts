import { action, makeObservable, observable } from 'mobx';

export class ModalWindow {
  public isOpen = false;

  constructor() {
    makeObservable(this, { isOpen: observable, open: action, close: action }, { autoBind: true });
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
