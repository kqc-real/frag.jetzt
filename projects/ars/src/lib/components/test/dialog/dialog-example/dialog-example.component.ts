import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { DialogEvent } from '../../../content/dialog/DialogEvent';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent implements OnInit,DialogEvent {

  @Output() public onCloseEmit:EventEmitter<void>=new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
