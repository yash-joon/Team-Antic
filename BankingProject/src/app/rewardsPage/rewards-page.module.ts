import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RewardsPageComponent } from './rewards-page.component';
import { NgApexchartsModule } from "ng-apexcharts";

import { CardAndPointsSectionComponent } from './card-and-points-section/card-and-points-section.component';
import { EarningsPieChartComponent } from './earnings-pie-chart/earnings-pie-chart.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';




@NgModule({
  declarations: [
    RewardsPageComponent,
    CardAndPointsSectionComponent,
    EarningsPieChartComponent,
    TransactionDetailsComponent
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
