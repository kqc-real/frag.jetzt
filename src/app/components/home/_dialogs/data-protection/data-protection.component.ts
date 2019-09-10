import { Component, OnInit } from '@angular/core';
import { DialogConfirmActionButtonType } from '../../../shared/dialog/dialog-action-buttons/dialog-action-buttons.component';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.scss']
})
export class DataProtectionComponent implements OnInit {

  deviceType: string;
  currentLang: string;

  confirmButtonType: DialogConfirmActionButtonType = DialogConfirmActionButtonType.Primary;

  constructor(private dialogRef: MatDialogRef<DataProtectionComponent>
  ) {
  }

  ngOnInit() {
    this.currentLang = localStorage.getItem('currentLang');
  }

  dataProtectionConsent(b: boolean) {
    this.dialogRef.close();
    localStorage.setItem('dataProtectionConsent', b.toString());
  }

  /**
   * Returns a lambda which closes the dialog on call.
   */
  buildConfirmActionCallback(): () => void {
    return () => this.dataProtectionConsent(true);
  }

  /**
   * Returns a lambda which closes the dialog on call.
   */
  buildDeclineActionCallback(): () => void {
    return () => this.dataProtectionConsent(false);
  }
}
