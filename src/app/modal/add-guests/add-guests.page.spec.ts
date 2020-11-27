import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGuestsPage } from './add-guests.page';

describe('AddGuestsPage', () => {
  let component: AddGuestsPage;
  let fixture: ComponentFixture<AddGuestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGuestsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGuestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
