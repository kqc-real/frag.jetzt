import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:directive-selector
  selector: 'lib-ars',
  template: `
    <p>
      ars works!
    </p>
  `,
  styles: []
})
// tslint:disable-next-line:directive-class-suffix
export class ArsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
