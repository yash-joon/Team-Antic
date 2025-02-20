import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './settings/security/security.component';
import { PersonalDetailsComponent } from './settings/personal-details/personal-details.component';
import { SignInPreferencesComponent } from './settings/sign-in-preferences/sign-in-preferences.component';

const routes: Routes = [
  { path: 'security', component: SecurityComponent },
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: 'sign-in-preferences', component: SignInPreferencesComponent },
  { path: '', redirectTo: '/security', pathMatch: 'full' },
  { path: '**', redirectTo: '/security' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
