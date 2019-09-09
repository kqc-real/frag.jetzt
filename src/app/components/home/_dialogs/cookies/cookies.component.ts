import { Component, OnInit } from '@angular/core';
import { DataProtectionComponent } from '../data-protection/data-protection.component';
import { MatDialog } from '@angular/material';
import { OverlayComponent } from '../overlay/overlay.component';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

  deviceType: string;
  currentLang: string;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.currentLang = localStorage.getItem('currentLang');
  }

  acceptCookies() {
    localStorage.setItem('cookieAccepted', 'true');
    localStorage.setItem('dataProtectionConsent', 'true');
  }

  declineCookies() {
    localStorage.setItem('cookieAccepted', 'false');

    this.openOverlay();
  }

  openDataProtection() {
  const dialogRef = this.dialog.open(DataProtectionComponent, {
    height: '95%'
  });
  dialogRef.componentInstance.deviceType = this.deviceType;
  }

  openOverlay() {
    const dialogRef = this.dialog.open(OverlayComponent, {
      width: '60%'
    });
    dialogRef.componentInstance.deviceType = this.deviceType;
    dialogRef.disableClose = true;
  }
}
