import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Et8 } from './et8';

describe('Et8', () => {
  let component: Et8;
  let fixture: ComponentFixture<Et8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Et8],
    }).compileComponents();

    fixture = TestBed.createComponent(Et8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
