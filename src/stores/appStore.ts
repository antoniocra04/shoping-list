import { makeAutoObservable } from 'mobx';

import { AddItemModal } from '../models/AddItemModal';

class AppStore {
  public addItemModal: AddItemModal = new AddItemModal();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export const appStore = new AppStore();
