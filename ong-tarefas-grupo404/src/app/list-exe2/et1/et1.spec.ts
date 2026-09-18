import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Et1 } from './et1';

describe('Et1', () => {
  let component: Et1;
  let fixture: ComponentFixture<Et1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Et1],
    }).compileComponents();

    fixture = TestBed.createComponent(Et1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
