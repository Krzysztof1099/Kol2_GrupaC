import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopKpComponent } from './shop-kp.component';

describe('ShopKpComponent', () => {
  let component: ShopKpComponent;
  let fixture: ComponentFixture<ShopKpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopKpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopKpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
