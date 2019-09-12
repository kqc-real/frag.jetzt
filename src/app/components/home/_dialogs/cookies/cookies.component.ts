import { Component, OnInit } from '@angular/core';
import { DataProtectionComponent } from '../data-protection/data-protection.component';
import { MatDialog } from '@angular/material';

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

    // not really the nicest way but should do its job until a better or native solution was found
    setTimeout(() => document.getElementById('cookie-header').focus(), 400);
  }

  acceptCookies() {
    localStorage.setItem('cookieAccepted', 'true');
  }

  exitApp() {
    localStorage.setItem('cookieAccepted', 'false');
    // TODO somehow exit the app, since the user didn't accept cookie usage
  }

  openDataProtection() {
  const dialogRef = this.dialog.open(DataProtectionComponent, {
    height: '95%',
    width: '75%'
  });
  dialogRef.componentInstance.deviceType = this.deviceType;
}
}
