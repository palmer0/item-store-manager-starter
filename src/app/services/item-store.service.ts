import {Injectable} from '@angular/core';
import {Item} from "../models/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemStoreService {

  items: Item[] = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'},
  ];

  constructor() { }

  getItems() {
    return this.items;
  }

  getItem(id: number): Item {
    const item=
      this.items.find(item => item.id === id);
    return {...item} as Item;
  }

  addItem(newItemName: string) {
    const newItem: Item = {
      id: this.items.length + 1,
      name: newItemName
    };
    this.items = [...this.items, newItem];

  }

  removeItem(removingItem: Item) {
    this.items = this.items.filter(
      item => item.id !== removingItem.id
    );
  }

  saveItem(editingItem: Item) {
    this.items = this.items.map(item => {
      if (item.id === editingItem.id) {
        return {...item, name: editingItem.name};
      }
      return item;
    });

  }

}
