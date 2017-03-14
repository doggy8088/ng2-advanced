import { Advcomp1PartComponent } from './../advcomp1-part/advcomp1-part.component';
import { Component, OnInit, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'app-advcomp1-header',
  templateUrl: './advcomp1-header.component.html',
  styleUrls: ['./advcomp1-header.component.css']
})
export class Advcomp1HeaderComponent implements OnInit {

  @ContentChild(Advcomp1PartComponent)
  part1: Advcomp1PartComponent;

  @Input()
  data;
  constructor() { }

  ngOnInit() {
  }

}
