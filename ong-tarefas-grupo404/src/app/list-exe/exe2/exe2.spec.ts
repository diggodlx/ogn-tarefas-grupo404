import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe2 } from './exe2';

describe('Exe2', () => {
  let component: Exe2;
  let fixture: ComponentFixture<Exe2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe2],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
