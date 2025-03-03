import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RewardsPageComponent } from './rewardsPage/rewards-page.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthComponent } from './auth/auth.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { PersonalDetailsComponent } from './settings/personal-details/personal-details.component';
import { SecurityComponent } from './settings/security/security.component';
import { SignInPreferencesComponent } from './settings/sign-in-preferences/sign-in-preferences.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'auth', component:AuthComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'sign-in-preferences', component: SignInPreferencesComponent },
  { path: 'rewards', component: RewardsPageComponent },
  { path: 'locator', component: StoreLocatorComponent },
  { path: '**', redirectTo: '/home' } // Redirect unknown routes to home
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
