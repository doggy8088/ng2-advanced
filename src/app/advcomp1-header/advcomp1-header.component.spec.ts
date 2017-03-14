import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Advcomp1HeaderComponent } from './advcomp1-header.component';

describe('Advcomp1HeaderComponent', () => {
  let component: Advcomp1HeaderComponent;
  let fixture: ComponentFixture<Advcomp1HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Advcomp1HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Advcomp1HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
