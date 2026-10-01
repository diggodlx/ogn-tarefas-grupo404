import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Et6 } from './et6';

describe('Et6', () => {
  let component: Et6;
  let fixture: ComponentFixture<Et6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Et6],
    }).compileComponents();

    fixture = TestBed.createComponent(Et6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
