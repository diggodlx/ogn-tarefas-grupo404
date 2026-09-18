import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Et2 } from './et2';

describe('Et2', () => {
  let component: Et2;
  let fixture: ComponentFixture<Et2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Et2],
    }).compileComponents();

    fixture = TestBed.createComponent(Et2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
