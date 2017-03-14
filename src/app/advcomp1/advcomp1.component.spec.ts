import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Advcomp1Component } from './advcomp1.component';

describe('Advcomp1Component', () => {
  let component: Advcomp1Component;
  let fixture: ComponentFixture<Advcomp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Advcomp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Advcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
