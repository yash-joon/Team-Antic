import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {
  fullName: string = 'John Doe';
  email: string = 'john@example.com';
  phoneNumber: string = '';
  selectedCountryCode: string = '+1';
  countryCodes: string[] = ['+1', '+44', '+86'];

  saveChanges() {
    // Logic to save personal details
  }
}
