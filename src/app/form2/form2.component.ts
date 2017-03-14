import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  constructor(private fb: FormBuilder) { }

  form: any;

  ngOnInit() {

    this.form = this.fb.group({
      'title': ['p1 default value', Validators.required],
      'subtitle': ['p2 default value', Validators.required]
    })

  }

}
