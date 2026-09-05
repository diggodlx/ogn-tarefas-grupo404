import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe9 } from './exe9';

describe('Exe9', () => {
  let component: Exe9;
  let fixture: ComponentFixture<Exe9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe9],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
