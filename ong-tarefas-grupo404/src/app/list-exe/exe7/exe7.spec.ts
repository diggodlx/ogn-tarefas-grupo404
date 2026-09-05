import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe7 } from './exe7';

describe('Exe7', () => {
  let component: Exe7;
  let fixture: ComponentFixture<Exe7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe7],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
