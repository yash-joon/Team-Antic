import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RewardsPageComponent } from './rewards-page.component';



@NgModule({
  declarations: [
    RewardsPageComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[
    RewardsPageComponent
  ]
})
export class RewardsPageModule { }
