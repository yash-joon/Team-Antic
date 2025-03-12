import { Component, ChangeDetectorRef } from '@angular/core';
import { fadeIn } from '../shared/utils/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [fadeIn]
})
export class HomePageComponent {

  landing2Visible = false;
  landing3Visible = false;

  constructor(private cdr: ChangeDetectorRef) {}

  onVisible(section: string) {
    setTimeout(() => {
      if (section === 'landing2') this.landing2Visible = true;
      if (section === 'landing3') this.landing3Visible = true;
      this.cdr.detectChanges();
    }, 100); // Slight delay for a smooth effect
  }
}
