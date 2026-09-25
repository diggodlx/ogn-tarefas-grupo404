import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Et4 } from './et4';

describe('Et4', () => {
  let component: Et4;
  let fixture: ComponentFixture<Et4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Et4],
    }).compileComponents();

    fixture = TestBed.createComponent(Et4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
