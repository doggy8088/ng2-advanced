import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

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

  num = 0;

  ngOnInit() {

    // this.num = this.route.snapshot.params['num'];

    this.route.params.subscribe((params) => {
      if(params['num']) {
        this.num = parseInt(params['num']);
      }
    });
  }

  IncrementNum() {
    this.router.navigate(['/cards', this.num+1]);
  }

}
