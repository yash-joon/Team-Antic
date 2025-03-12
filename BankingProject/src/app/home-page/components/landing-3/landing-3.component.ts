import { Component } from '@angular/core';

import { fadeInTitle, fadeInText, fadeInStagger } from '../../../shared/utils/animations';

@Component({
  selector: 'app-landing-3',
  templateUrl: './landing-3.component.html',
  styleUrl: './landing-3.component.scss',
  animations: [fadeInTitle, fadeInText, fadeInStagger]
})
export class Landing3Component {
  reviews = [
    {
      name: 'Sarah Thompson',
      location: 'New York, USA',
      feedback: 'Antic Bank made managing my finances effortless! The app is intuitive, and their support is top-notch.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      name: 'James Carter',
      location: 'London, UK',
      feedback: 'The best banking experience I’ve ever had. Secure, fast, and rewards like no other bank.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Jennifer Truong',
      location: 'Sydney, Australia',
      feedback: 'Instant transactions and no hidden fees! Love how easy it is to save with Antic Bank.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    }
  ];
}
