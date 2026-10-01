import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Et9 } from './et9';

describe('Et9', () => {
  let component: Et9;
  let fixture: ComponentFixture<Et9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Et9],
    }).compileComponents();

    fixture = TestBed.createComponent(Et9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
