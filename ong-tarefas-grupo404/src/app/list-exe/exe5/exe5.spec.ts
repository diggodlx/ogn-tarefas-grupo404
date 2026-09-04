import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe5 } from './exe5';

describe('Exe5', () => {
  let component: Exe5;
  let fixture: ComponentFixture<Exe5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe5],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
