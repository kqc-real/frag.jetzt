import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter, Input,
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
export class DialogOverlayComponent implements OnInit, AfterViewInit, OnDestroy, DialogEvent {

  @Input() closeByOverlay = true;
  @Output() closeEmit: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild(CdkTrapFocus) trap: CdkTrapFocus;

  private escapeEvent;
  private lastFocus;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.lastFocus = document.activeElement;
    window.addEventListener('keydown', this.escapeEvent = e => {
      if (e.key === 'Escape') {
        this.closeDialog();
      }
    });
    this.trap.enabled = true;
    this.trap.focusTrap.focusFirstTabbableElement();
  }

  ngOnDestroy() {
    window.removeEventListener('keydown', this.escapeEvent);
    this.lastFocus.focus();
  }

  private closeDialogByOverlay(e: MouseEvent) {
    if (!this.closeByOverlay) {
      return;
    }
    if (e.target !== e.currentTarget) {
      e.cancelBubble = true;
      return;
    }
    this.closeDialog();
  }

  private closeDialog() {
    this.closeEmit.emit();
  }

}
