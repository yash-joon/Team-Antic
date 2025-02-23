import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RewardsPageModule } from './rewardsPage/rewards-page.module';
import { HomePageComponent } from './home-page/home-page.component';
import { RewardsPageComponent } from './rewardsPage/rewards-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SettingsComponent } from './settings/settings.component';
import { SecurityComponent } from './settings/security/security.component';
import { PersonalDetailsComponent } from './settings/personal-details/personal-details.component';
import { SignInPreferencesComponent } from './settings/sign-in-preferences/sign-in-preferences.component';
import { AuthComponent } from './auth/auth.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    SettingsComponent,
    SecurityComponent,
    PersonalDetailsComponent,
    SignInPreferencesComponent,
    AuthComponent,
    StoreLocatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RewardsPageModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }