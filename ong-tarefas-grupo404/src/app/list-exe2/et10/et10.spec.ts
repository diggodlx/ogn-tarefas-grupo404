import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Et10 } from './et10';

describe('Et10', () => {
  let component: Et10;
  let fixture: ComponentFixture<Et10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Et10],
    }).compileComponents();

    fixture = TestBed.createComponent(Et10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
