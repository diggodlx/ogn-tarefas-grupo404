import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Et3 } from './et3';

describe('Et3', () => {
  let component: Et3;
  let fixture: ComponentFixture<Et3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Et3],
    }).compileComponents();

    fixture = TestBed.createComponent(Et3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
