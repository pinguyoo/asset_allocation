import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
