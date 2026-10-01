import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Et11 } from './et11';

describe('Et11', () => {
  let component: Et11;
  let fixture: ComponentFixture<Et11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Et11],
    }).compileComponents();

    fixture = TestBed.createComponent(Et11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
