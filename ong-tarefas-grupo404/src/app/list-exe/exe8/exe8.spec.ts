import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe8 } from './exe8';

describe('Exe8', () => {
  let component: Exe8;
  let fixture: ComponentFixture<Exe8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe8],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
