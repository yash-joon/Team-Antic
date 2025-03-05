import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  authForm: FormGroup;
  isLogin = true;
  showOTP = false;
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{6,}$') 
        ]
      ],
      otp: ['']
    });
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.showOTP = false;
    this.authForm.reset();
  }

  get email(): FormControl {
    return this.authForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.authForm.get('password') as FormControl;
  }

  get otp(): FormControl {
    return this.authForm.get('otp') as FormControl;
  }

  submit() {
    if (this.authForm.invalid) {
      this.errorMessage = 'Please fill in all fields correctly';
      return;
    }

    const { email, password } = this.authForm.value;

    if (this.isLogin) {
      console.log('Logging in with', email, password);
 
    } else {
      console.log('Registering with', email, password);

    }
  }

  verifyOTP() {
    if (!this.otp.value || this.otp.value.length !== 6) {
      this.errorMessage = 'OTP must be 6 digits';
      return;
    }
    console.log('Verifying OTP:', this.otp.value);
  }
}
