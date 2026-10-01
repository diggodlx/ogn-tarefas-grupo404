import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Et5 } from './et5';

describe('Et5', () => {
  let component: Et5;
  let fixture: ComponentFixture<Et5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Et5],
    }).compileComponents();

    fixture = TestBed.createComponent(Et5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
