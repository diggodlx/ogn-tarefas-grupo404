import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe4 } from './exe4';

describe('Exe4', () => {
  let component: Exe4;
  let fixture: ComponentFixture<Exe4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe4],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
