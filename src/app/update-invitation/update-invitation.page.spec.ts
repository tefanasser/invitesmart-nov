import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInvitationPage } from './update-invitation.page';

describe('UpdateInvitationPage', () => {
  let component: UpdateInvitationPage;
  let fixture: ComponentFixture<UpdateInvitationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInvitationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInvitationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
