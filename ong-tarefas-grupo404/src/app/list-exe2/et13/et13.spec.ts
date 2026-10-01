import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Et13 } from './et13';

describe('Et13', () => {
  let component: Et13;
  let fixture: ComponentFixture<Et13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Et13],
    }).compileComponents();

    fixture = TestBed.createComponent(Et13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
