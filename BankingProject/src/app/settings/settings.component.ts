import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  username: string = 'User Name'; 
  avatarUrl: string = '/assets/defaultAvatar.jpg'; // URL

  constructor(private router: Router) {}

  // upload avatar
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.avatarUrl = e.target.result; // upate URL
      };
      reader.readAsDataURL(file);
    }
  }

  
  navigateTo(path: string) {
    this.router.navigate(['/settings', path]);
  }
}
