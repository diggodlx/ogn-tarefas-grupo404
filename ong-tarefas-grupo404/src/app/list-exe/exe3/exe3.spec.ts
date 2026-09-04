import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe3 } from './exe3';

describe('Exe3', () => {
  let component: Exe3;
  let fixture: ComponentFixture<Exe3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe3],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
