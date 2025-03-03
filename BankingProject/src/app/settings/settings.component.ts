import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit, OnDestroy{
  username: string = ''; 
  avatarUrl: string = '/assets/defaultAvatar.jpg'; // URL

  constructor(private router: Router,private ar:ActivatedRoute) {}
  
  ngOnInit() {
    const userData = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.username = userData.fullName || 'User Name';

    const storedAvatar = sessionStorage.getItem('avatarUrl');
    if (storedAvatar) {
      this.avatarUrl = storedAvatar;
    }
  }

  // upload avatar
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.avatarUrl = e.target.result; 
        sessionStorage.setItem('avatarUrl', this.avatarUrl); 
      };
      reader.readAsDataURL(file);
    }
  }

  ngOnDestroy(): void {
      console.log(this.ar.routeConfig)
  }

  
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
