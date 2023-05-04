import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../models/item.model";

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {

  @Input() editingItem: Item | null = null;
  @Output() saveItemEvent = new EventEmitter<Item>();
  @Output() addItemEvent = new EventEmitter<string>();

  newItemName = '';

  constructor() { }

  addItem() {

  }

  saveItem() {

  }

  clearForm() {

  }

}
