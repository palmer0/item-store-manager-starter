import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ItemListComponent} from './item-list.component';
import {ItemStoreService} from '../../services/item-store.service';
import {Item} from "../../models/item.model";
import {ItemFormComponent} from "../item-form/item-form.component";

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  let store: ItemStoreService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListComponent, ItemFormComponent ],
      providers: [ ItemStoreService ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(ItemStoreService);
  });



  test('should initialize item list from item service', () => {
    component.ngOnInit();

    expect(component.items).toEqual(store.items);
  });


  test('should remove an item from item list', () => {
    const itemToRemove: Item = { id: 1, name: "Item 1"};

    jest.spyOn(store, 'removeItem');

    component.ngOnInit();
    component.removeItem(itemToRemove);

    expect(store.removeItem).toHaveBeenCalledWith(itemToRemove);
    expect(store.items.length).toBe(2);
    expect(component.items.length).toBe(2);

  });

  test('should edit an item', () => {
    const itemToEdit: Item = { id: 1, name: "Item 1"};

    component.editItem(itemToEdit);

    expect(component.selectedItem).toEqual(itemToEdit);
  });

  test('should add an item', () => {
    const itemToAdd: Item  = {id: 4, name: 'Item 4'};

    jest.spyOn(store, 'addItem');

    component.ngOnInit();
    component.addItem(itemToAdd.name);

    expect(store.addItem).toHaveBeenCalledWith(itemToAdd.name);
    expect(store.items.length).toBe(4);
    expect(component.items.length).toBe(4);
    expect(store.getItem(itemToAdd.id)).toEqual(itemToAdd);
  });

  test('should save an item', () => {
    const itemToSave = store.getItem(1);
    itemToSave.name = `${itemToSave.name}b`

    jest.spyOn(store, 'saveItem');

    component.ngOnInit();
    component.saveItem(itemToSave);

    expect(store.saveItem).toHaveBeenCalledWith(itemToSave);
    expect(store.items.length).toBe(3);
    expect(component.items.length).toBe(3);
    expect(store.getItem(itemToSave.id)).toEqual(itemToSave);

  });
});
