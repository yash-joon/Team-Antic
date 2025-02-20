import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { RewardsPageComponent } from './rewardsPage/rewards-page.component';
import { SettingsComponent } from './settings/settings.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomePageComponent },
  // TODO: Connect Settings page
  { path: 'settings', component: SettingsComponent },
  { path: 'rewards', component: RewardsPageComponent },
  // TODO: Connect Store Locator page
  // { path: 'locator', ...},
  { path: '**', redirectTo: '/home' } // Redirect unknown routes to home
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
