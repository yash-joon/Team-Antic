import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RewardsPageComponent } from './rewardsPage/rewards-page.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthComponent } from './auth/auth.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { PersonalDetailsComponent } from './settings/personal-details/personal-details.component';
import { SecurityComponent } from './settings/security/security.component';
import { SignInPreferencesComponent } from './settings/sign-in-preferences/sign-in-preferences.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch:'full', component:HomeComponent }, // Default Route
  { path: 'auth', component:AuthComponent },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: 'security', component: SecurityComponent },
  { path: 'sign-in-preferences', component: SignInPreferencesComponent },
  { path: 'rewards', component: RewardsPageComponent },
  { path: 'locator', component: StoreLocatorComponent },
  { path: '**', redirectTo: '/' } // Redirect unknown routes to home
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
