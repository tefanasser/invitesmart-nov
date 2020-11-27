import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyGuestPlanPage } from './buy-guest-plan.page';

describe('BuyGuestPlanPage', () => {
  let component: BuyGuestPlanPage;
  let fixture: ComponentFixture<BuyGuestPlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyGuestPlanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyGuestPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
