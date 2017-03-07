import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  GoHome() {
    this.router.navigateByUrl('/');
  }

  GoChartsFlot() {
    this.router.navigate(['/charts', 'flot']);
  }

  ngOnInit() {
  }

}
