import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in-preferences',
  templateUrl: './sign-in-preferences.component.html',
  styleUrls: ['./sign-in-preferences.component.scss']
})
export class SignInPreferencesComponent {
  rememberDevices: boolean = true;

  enableMobileOTP() {
    // Logic to enable mobile OTP
  }

  toggleRememberDevices() {
    this.rememberDevices = !this.rememberDevices;
  }
}
