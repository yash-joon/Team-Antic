import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RewardsPageComponent } from './rewards-page.component';
import { NgApexchartsModule } from "ng-apexcharts";




@NgModule({
  declarations: [
    RewardsPageComponent
  ],
  imports: [
    CommonModule,
    NgApexchartsModule
  ], 
  exports:[
    RewardsPageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RewardsPageModule { }
