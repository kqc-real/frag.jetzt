import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DialogEvent } from '../../../content/dialog/DialogEvent';

@Component({
  selector: 'ars-dialog-fullscreen-example',
  templateUrl: './dialog-fullscreen-example.component.html',
  styleUrls: ['./dialog-fullscreen-example.component.scss']
})
export class DialogFullscreenExampleComponent implements OnInit, DialogEvent {

  @Output() closeEmit: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

}
