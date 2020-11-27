import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationTypePage } from './invitation-type.page';

describe('InvitationTypePage', () => {
  let component: InvitationTypePage;
  let fixture: ComponentFixture<InvitationTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitationTypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitationTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
