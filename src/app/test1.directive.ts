import {HostListener, Directive,  HostBinding} from '@angular/core';

@Directive({
  selector: '[appTest1]'
})
export class Test1Directive {

  /*
   * [style.color]="'red'"
   */
  @HostBinding('style.color')
  textColor: string = 'red';

  /*
   * (click)="changeColor($event)"
   */
  @HostListener('click', ['$event'])
  changeColor($event: MouseEvent) {
    this.textColor = 'darkgreen';
    console.dir($event.target);
  }
  constructor() { }

}
