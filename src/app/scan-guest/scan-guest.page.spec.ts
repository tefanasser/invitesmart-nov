import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanGuestPage } from './scan-guest.page';

describe('ScanGuestPage', () => {
  let component: ScanGuestPage;
  let fixture: ComponentFixture<ScanGuestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanGuestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanGuestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
