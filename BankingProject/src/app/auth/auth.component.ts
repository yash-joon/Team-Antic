import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../services/auth.service';

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
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      otp: ['']
    });
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.showOTP = false;
    this.authForm.reset();
    console.log(this.isLogin)
  }

  submit() {
    // this.errorMessage = '';
    // const { username, password } = this.authForm.value;

    // if (this.isLogin) {
    //   this.authService.login(username, password).subscribe(response => {
    //     if (response.requires2FA) {
    //       this.showOTP = true;
    //     } else {
    //       alert('Login successful! Redirecting...');
    //     }
    //   }, err => {
    //     this.errorMessage = err.error.message || 'Login failed';
    //   });
    // } else {
    //   this.authService.register(username, password).subscribe(response => {
    //     alert('Registration successful! You can now log in.');
    //     this.toggleMode();
    //   }, err => {
    //     this.errorMessage = err.error.message || 'Registration failed';
    //   });
    // }
  }

  verifyOTP() {
    // const { username, otp } = this.authForm.value;
    // if (!otp) {
    //   this.errorMessage = 'OTP is required';
    //   return;
    // }
    // this.authService.verifyOTP(username, otp).subscribe(response => {
    //   alert('2FA Verified! Redirecting...');
    // }, err => {
    //   this.errorMessage = err.error.message || 'Invalid OTP';
    // });
  }
}