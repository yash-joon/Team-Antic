import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RewardsPageModule } from './rewardsPage/rewards-page.module';
import { HomePageComponent } from './home-page/home-page.component';
import { RewardsPageComponent } from './rewardsPage/rewards-page.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RewardsPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
