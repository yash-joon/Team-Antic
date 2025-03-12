import { trigger, transition, style, animate } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

export const fadeInTitle = trigger('fadeInTitle', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-20px)' }),
    animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

export const fadeInText = trigger('fadeInText', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.8s 0.2s ease-out', style({ opacity: 1 })),
  ]),
]);

export const fadeInStagger = trigger('fadeInStagger', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('0.8s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);
