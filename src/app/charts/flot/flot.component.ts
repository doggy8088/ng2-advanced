import { ChangeDetectionStrategy, NgZone, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FlotCharts } from "./init";
import 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlotComponent implements OnInit {

  temp = 1;

  constructor(private zone: NgZone, private cd: ChangeDetectorRef) {
    Observable.interval(1000).subscribe((id) => {
      this.temp++;
      this.cd.markForCheck();
    });
  }

  ngOnInit() {
    // this.zone.runOutsideAngular(() => {
      $(FlotCharts);
    // });
  }

  showText() {
    console.log(new Date());
    return "OK";
  }
}
