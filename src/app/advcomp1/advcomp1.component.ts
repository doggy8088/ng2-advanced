import { Advcomp1HeaderComponent } from './../advcomp1-header/advcomp1-header.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-advcomp1',
  templateUrl: './advcomp1.component.html',
  styleUrls: ['./advcomp1.component.css']
})
export class Advcomp1Component implements OnInit {

  @ViewChild('p')
  p: ElementRef;

  @ViewChild('myheader')
  myheader1: Advcomp1HeaderComponent;

  @ViewChild(Advcomp1HeaderComponent)
  myheader2: Advcomp1HeaderComponent;

  constructor() { }

  ngOnInit() {
  }

  debug() {
    console.log(this.p);
    console.log(this.myheader1);
    console.log(this.myheader2);
  }

}
