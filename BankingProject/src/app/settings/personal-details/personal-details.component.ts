import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit{
  fullName: string = '';
  email: string = '';
  phoneNumber: string = '';
  selectedCountryCode: string = '+1';
  countryCodes: string[] = ['+1', '+44', '+86'];

  ngOnInit() {
 
    const userData = JSON.parse(sessionStorage.getItem('user') || '{}');
    
    this.fullName = userData.fullName || '';
    this.email = userData.email || '';
    this.phoneNumber = userData.phoneNumber || '';
    this.selectedCountryCode = userData.countryCode || '+1';

  }

  saveChanges() {
    const updatedUser = {
      fullName: this.fullName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      countryCode: this.selectedCountryCode
    };

    sessionStorage.setItem('user', JSON.stringify(updatedUser)); 
    console.log('User details saved:', updatedUser);
    alert('Changes saved successfully!');
  }


  goBack() {
    history.back(); 
  }
}
