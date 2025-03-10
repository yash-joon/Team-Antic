import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RewardsPageModule } from './rewardsPage/rewards-page.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RewardsPageComponent } from './rewardsPage/rewards-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SettingsComponent } from './settings/settings.component';
import { SecurityComponent } from './settings/security/security.component';
import { PersonalDetailsComponent } from './settings/personal-details/personal-details.component';
import { SignInPreferencesComponent } from './settings/sign-in-preferences/sign-in-preferences.component';
import { AuthComponent } from './auth/auth.component';
import { StoreLocatorComponent } from './store-locator/store-locator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BaseChartDirective } from 'ng2-charts';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { HomeComponent } from './home/home.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    declarations: [
        AppComponent,
        DashboardPageComponent,
        NavbarComponent,
        SettingsComponent,
        SecurityComponent,
        PersonalDetailsComponent,
        SignInPreferencesComponent,
        AuthComponent,
        StoreLocatorComponent,
        PageFooterComponent,
        HomeComponent,
    ],
    bootstrap: [AppComponent], 
    imports: [BrowserModule,
        AppRoutingModule,
        RewardsPageModule,
        FormsModule,
        ReactiveFormsModule,
        BaseChartDirective,
        BrowserAnimationsModule,
        MatExpansionModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule],
    providers: [
        provideCharts(withDefaultRegisterables()),
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }