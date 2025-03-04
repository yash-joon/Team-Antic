import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent{
  userForm: FormGroup;
  countryCodes = ['+1', '+44', '+91', '+86']; 

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      address: ['', Validators.required],
      countryCode: ['+1']
    });
  }

  saveChanges() {
    if (this.userForm.valid) {
      console.log('Saving user details:', this.userForm.value);
      alert('Profile updated successfully!');
    }
  }

  goBack() {
    history.back();
  }
}
