import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Et7 } from './et7';

describe('Et7', () => {
  let component: Et7;
  let fixture: ComponentFixture<Et7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Et7],
    }).compileComponents();

    fixture = TestBed.createComponent(Et7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
