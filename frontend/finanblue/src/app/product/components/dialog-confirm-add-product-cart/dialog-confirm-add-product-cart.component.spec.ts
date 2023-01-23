import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmAddProductCartComponent } from './dialog-confirm-add-product-cart.component';

describe('DialogConfirmAddProductCartComponent', () => {
  let component: DialogConfirmAddProductCartComponent;
  let fixture: ComponentFixture<DialogConfirmAddProductCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmAddProductCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogConfirmAddProductCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
