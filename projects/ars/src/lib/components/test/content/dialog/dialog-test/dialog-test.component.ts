import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DialogOverlayComponent } from '../../../../content/dialog/dialog-overlay/dialog-overlay.component';
import { DialogBoxComponent } from '../../../../content/dialog/dialog-box/dialog-box.component';
import { DialogBoxContentComponent } from '../../../../content/dialog/dialog-box-content/dialog-box-content.component';
import { DialogExampleComponent } from '../../../dialog/dialog-example/dialog-example.component';
import { DialogEvent } from '../../../../content/dialog/DialogEvent';
import { DialogFullscreenExampleComponent } from '../../../dialog/dialog-fullscreen-example/dialog-fullscreen-example.component';
import { DebugBorder } from '../../../../../models/debug/DebugBorder';

@Component({
  selector: 'ars-test-dialog',
  templateUrl: './dialog-test.component.html',
  styleUrls: ['./dialog-test.component.scss']
})
export class DialogTestComponent implements OnInit,AfterViewInit {

  constructor(private overlay:Overlay) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    DebugBorder.border('c');
  }

  createDialog(){
    this.createDia(DialogExampleComponent);
  }

  createDialogFullscreen(){
    this.createDia(DialogFullscreenExampleComponent);
  }

  createDia(cls:any,e?:DialogEvent){
    const dialog=this.overlay.create();
    const portal=new ComponentPortal(cls);
    const dialogRef=dialog.attach(portal);
    const instance=dialogRef.instance;
    if(typeof e==='undefined'){
      e=<DialogEvent>instance;
    }
    e.onCloseEmit.subscribe(()=>{
      dialog.detach();
    })
  }

}
