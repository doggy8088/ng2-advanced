import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  data: any = {};

  constructor() { }

  ngOnInit() {
  }

  doSubmit(f: NgForm) {
    if(f.valid) {
      console.log(f.value);
    }
  }
}
