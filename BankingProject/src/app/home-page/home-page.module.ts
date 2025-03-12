import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { Landing2Component } from './components/landing-2/landing-2.component';
import { HomePageComponent } from './home-page.component';
import { MatIconModule } from '@angular/material/icon';
import { Landing3Component } from './components/landing-3/landing-3.component';
import { LazyLoaderDirective } from '../shared/directives/lazy-loader.directive';
import { fadeIn } from '../shared/utils/animations';
@NgModule({
  declarations: [
    HomePageComponent,
    LandingComponent,
    Landing2Component,
    Landing3Component,
    LazyLoaderDirective
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    HomePageComponent,
    LazyLoaderDirective
  ]
})
export class HomePageModule {}
