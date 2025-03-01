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
  confirmNewPassword: string = '';
  is2FAEnabled = false;
  activeSessions = [
    { id: 1, device: 'Device 1', location: 'Location 1', lastActive: 'Last Active 1' },
    { id: 2, device: 'Device 2', location: 'Location 2', lastActive: 'Last Active 2' }
  ];

  togglePasswordForm() {
    this.showPasswordForm = !this.showPasswordForm;
  }

  updatePassword() {
    
    if (this.newPassword !== this.confirmNewPassword) {
      alert('New passwords do not match!');
      return;
    }

    // console.log('Updating password...', {
    //   current: this.currentPassword,
    //   new: this.newPassword
    // });

    // using API to update the password(need to check if the old password is valid,if it is valid then can
    // update the new password)
    // this.authService.updatePassword(this.currentPassword, this.newPassword).subscribe(response => { ... });

    alert('Password updated successfully!');
  }

  cancelPasswordChange() {
    this.showPasswordForm = false;
  }


  revoke(sessionId: number) {

    this.activeSessions = this.activeSessions.filter(session => session.id !== sessionId);

  }
  goBack() {
    history.back(); 
  }

}
