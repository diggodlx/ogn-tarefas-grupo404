import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe1 } from './exe1';

describe('Exe1', () => {
  let component: Exe1;
  let fixture: ComponentFixture<Exe1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe1],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
