import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {ItemFormComponent} from './item-form.component';
import {ItemStoreService} from '../../services/item-store.service';
import {Item} from '../../models/item.model';

describe('ItemFormComponent', () => {
  let component: ItemFormComponent;
  let fixture: ComponentFixture<ItemFormComponent>;
  let store: ItemStoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ItemFormComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFormComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(ItemStoreService);
  });

  test('should not add an item using the addItem method', () => {
    const itemName= '';
    component.newItemName = itemName;

    jest.spyOn(component.addItemEvent, 'emit');

    component.addItem();

    expect(component.addItemEvent.emit).not.toHaveBeenCalledWith(itemName);
  });

  test('should add an item using the addItem method', () => {
    const itemName= 'Item 4';
    component.newItemName = itemName;

    jest.spyOn(component.addItemEvent, 'emit');

    component.addItem();

    expect(component.addItemEvent.emit).toHaveBeenCalledWith(itemName);
    expect(component.newItemName).toBe('');
  });

  test('should save an item using the saveItem method', () => {
    const itemToSave: Item =  { id: 1, name: "Item 1"};

    jest.spyOn(component.saveItemEvent, 'emit');

    component.editingItem = itemToSave;
    component.saveItem();

    expect(component.saveItemEvent.emit).toHaveBeenCalledWith(itemToSave);
    expect(component.editingItem).toBeNull();
  });

  test('should clear form when saveItem method is called', () => {

    // Arrange
    const itemToSave: Item =  { id: 1, name: "Item 1"};
    component.editingItem = itemToSave;

    // Act
    component.clearForm();

    // Assert
    expect(component.newItemName).toEqual('');
    expect(component.editingItem).toBeNull();
  });

  test('should clear form when addItem method is called', () => {
    // Arrange
    component.newItemName = 'New item name';

    // Act
    component.clearForm();

    // Assert
    expect(component.newItemName).toEqual('');
    expect(component.editingItem).toBeNull();
  });
})
