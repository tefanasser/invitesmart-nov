import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNamesPage } from './add-names.page';

describe('AddNamesPage', () => {
  let component: AddNamesPage;
  let fixture: ComponentFixture<AddNamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNamesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
