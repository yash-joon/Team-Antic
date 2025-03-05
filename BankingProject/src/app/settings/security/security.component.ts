import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent {
  showPasswordForm = false;

  passwordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group(
      {
        currentPassword: ['', Validators.required],
        newPassword: ['', [Validators.required, Validators.minLength(10)]],
        confirmNewPassword: ['', Validators.required]
      },
      { validator: this.passwordMatchValidator } 
    );
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const newPassword = formGroup.get('newPassword')?.value;
    const confirmNewPassword = formGroup.get('confirmNewPassword')?.value;
    
    return newPassword === confirmNewPassword ? null : { passwordMismatch: true };
  }

  updatePassword() {
    if (this.passwordForm.invalid) {
      return;
    }

    alert('Password updated successfully!');
  }
  goBack() {
    history.back();
  }
}
