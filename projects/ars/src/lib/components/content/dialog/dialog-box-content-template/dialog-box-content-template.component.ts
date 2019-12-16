import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DialogEvent } from '../DialogEvent';

@Component({
  selector: 'ars-dialog-box-content-template',
  templateUrl: './dialog-box-content-template.component.html',
  styleUrls: ['./dialog-box-content-template.component.scss']
})
export class DialogBoxContentTemplateComponent implements OnInit,DialogEvent {

  @Output() onCloseEmit:EventEmitter<void>=new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

}
