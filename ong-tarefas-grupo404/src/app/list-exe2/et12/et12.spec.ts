import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Et12 } from './et12';

describe('Et12', () => {
  let component: Et12;
  let fixture: ComponentFixture<Et12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Et12],
    }).compileComponents();

    fixture = TestBed.createComponent(Et12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
