import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemKpComponent } from './shop-item-kp.component';

describe('ShopItemKpComponent', () => {
  let component: ShopItemKpComponent;
  let fixture: ComponentFixture<ShopItemKpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopItemKpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemKpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
