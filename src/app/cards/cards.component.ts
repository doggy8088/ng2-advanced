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

  p1;
  p2;

  ngOnInit() {

    this.p1 = this.route.snapshot.params['p1'];
    this.p2 = this.route.snapshot.params['p2'];

    // this.num = this.route.snapshot.params['num'];
    this.route.params.subscribe((params) => {
      if(params['num']) {
        this.num = parseInt(params['num']);
      }
    });
  }

  IncrementNum() {
    // this.router.navigate(['/cards', this.num+1]);
    this.router.navigate(['..', this.num+1, { p1: this.p1, p2: this.p2 }], {
      relativeTo: this.route,
      queryParams: {
        name: 'Will'
      }
    });
  }

}
