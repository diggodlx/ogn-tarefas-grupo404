import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe6 } from './exe6';

describe('Exe6', () => {
  let component: Exe6;
  let fixture: ComponentFixture<Exe6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exe6],
    }).compileComponents();

    fixture = TestBed.createComponent(Exe6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
