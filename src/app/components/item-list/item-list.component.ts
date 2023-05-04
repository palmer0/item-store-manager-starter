import {Component, OnInit} from '@angular/core';
import {Item} from "../../models/item.model";
import {ItemStoreService} from "../../services/item-store.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[] = [];
  selectedItem: Item | null = null;

  constructor(private readonly itemStore: ItemStoreService) { }

  ngOnInit(): void {

  }

  editItem(item: Item) {

  }

  removeItem(item: Item) {

  }

  addItem(itemName: string) {

  }

  saveItem(item: Item) {

  }

}
