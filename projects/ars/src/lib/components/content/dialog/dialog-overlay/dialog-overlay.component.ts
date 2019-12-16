import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild
} from '@angular/core';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { DialogEvent } from '../DialogEvent';

@Component({
  selector: 'ars-dialog-overlay',
  templateUrl: './dialog-overlay.component.html',
  styleUrls: ['./dialog-overlay.component.scss']
})
export class DialogOverlayComponent implements OnInit,AfterViewInit,OnDestroy,DialogEvent {

  @Output() onCloseEmit:EventEmitter<void>=new EventEmitter<void>();
  @ViewChild(CdkTrapFocus)trap:CdkTrapFocus;

  private escapeEvent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    window.addEventListener('keydown',this.escapeEvent=e=>{
      if(e.key==='Escape')this.closeDialog();
    });
  }

  ngOnDestroy(){
    window.removeEventListener('keydown',this.escapeEvent);
  }

  private closeDialogByOverlay(e:MouseEvent){
    if(e.target!==e.currentTarget){
      e.cancelBubble=true;
      return;
    }
    this.closeDialog();
  }

  private closeDialog(){
    this.onCloseEmit.emit();
  }

}
