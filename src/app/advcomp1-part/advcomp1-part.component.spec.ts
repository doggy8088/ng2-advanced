import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Advcomp1PartComponent } from './advcomp1-part.component';

describe('Advcomp1PartComponent', () => {
  let component: Advcomp1PartComponent;
  let fixture: ComponentFixture<Advcomp1PartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Advcomp1PartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Advcomp1PartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
