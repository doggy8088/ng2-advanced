import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  constructor(private fb: FormBuilder) { }

  types = [1,2,3,4,5];

  form: any;

  ngOnInit() {

    this.form = this.fb.group({
      'f1': '123',
      'f2': 'f2'
    })

    this.form = this.fb.group(new MyData());

    this.form = this.fb.group({
      'title': [
        'p1 default value',
        [
          Validators.required,
          Validators.maxLength(10)
        ]
      ],
      'subtitle': ['p2 default value', Validators.required],
      'types': this.fb.array(
        this.types.map((v, idx) => {
          return this.fb.control(v, Validators.required)
        })
      )
    })

  }

}

class MyData {
  f1: string;
  f2: string;
}
