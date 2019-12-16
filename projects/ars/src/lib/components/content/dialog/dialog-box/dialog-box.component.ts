import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DialogEvent } from '../DialogEvent';

@Component({
  selector: 'ars-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit,DialogEvent {

  @Output() onCloseEmit:EventEmitter<void>=new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
