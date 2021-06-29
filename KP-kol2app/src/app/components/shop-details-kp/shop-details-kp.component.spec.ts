import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsKpComponent } from './shop-details-kp.component';

describe('ShopDetailsKpComponent', () => {
  let component: ShopDetailsKpComponent;
  let fixture: ComponentFixture<ShopDetailsKpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopDetailsKpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsKpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
