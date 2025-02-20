import { Component } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent {
  showPasswordForm = false;
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  is2FAEnabled = false;
  verificationCode: string = '123 456';
  enteredCode: string = '';
  backupCodes: string[] = ['code1', 'code2', 'code3'];
  activeSessions = [
    { id: 1, device: 'Device 1', location: 'Location 1', lastActive: 'Last Active 1' },
    { id: 2, device: 'Device 2', location: 'Location 2', lastActive: 'Last Active 2' }
  ];

  togglePasswordForm() {
    this.showPasswordForm = !this.showPasswordForm;
  }

  updatePassword() {
    // Add your password update logic here
  }

  cancelPasswordChange() {
    this.showPasswordForm = false;
  }

  toggle2FA() {
    this.is2FAEnabled = !this.is2FAEnabled;
  }

  generateNewCodes() {
    // Logic to generate new backup codes
  }

  revokeSession(sessionId: number) {
    // Logic to revoke session
  }
}
