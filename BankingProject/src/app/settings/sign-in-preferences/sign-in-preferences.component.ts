import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in-preferences',
  templateUrl: './sign-in-preferences.component.html',
  styleUrls: ['./sign-in-preferences.component.scss']
})
export class SignInPreferencesComponent {
  methodStatus: string = 'inactive'; 
  rememberDevices: boolean = true;

  enableMobileOTP() {
    // Logic to enable mobile OTP
    this.methodStatus = this.methodStatus === 'inactive' ? 'active' : 'inactive';

  }

  toggleRememberDevices() {
    this.rememberDevices = !this.rememberDevices;
  }

  goBack() {
    history.back(); 
  }

}
