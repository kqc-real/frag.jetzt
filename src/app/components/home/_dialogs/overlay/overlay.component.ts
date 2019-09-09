import { Component, OnInit } from '@angular/core';
import { CookiesComponent } from '../cookies/cookies.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  deviceType: string;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  showCookieModal() {
    const dialogRef = this.dialog.open(CookiesComponent, {
      width: '60%',
      autoFocus: false
    });
    dialogRef.disableClose = true;
    dialogRef.componentInstance.deviceType = this.deviceType;
  }

}
