import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePackagePage } from './choose-package.page';

describe('ChoosePackagePage', () => {
  let component: ChoosePackagePage;
  let fixture: ComponentFixture<ChoosePackagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosePackagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePackagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
