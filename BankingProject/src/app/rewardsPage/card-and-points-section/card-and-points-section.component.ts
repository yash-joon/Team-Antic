import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-and-points-section',
  templateUrl: './card-and-points-section.component.html',
  styleUrl: './card-and-points-section.component.scss'
})
export class CardAndPointsSectionComponent {
  @Input() totalPoints: number = 0;
}
