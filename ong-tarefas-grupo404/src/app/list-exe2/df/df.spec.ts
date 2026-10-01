import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Df } from './df';

describe('Df', () => {
  let component: Df;
  let fixture: ComponentFixture<Df>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Df],
    }).compileComponents();

    fixture = TestBed.createComponent(Df);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
