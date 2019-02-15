import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverProfilePage } from './popover-profile.page';

describe('PopoverProfilePage', () => {
  let component: PopoverProfilePage;
  let fixture: ComponentFixture<PopoverProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
