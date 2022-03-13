import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    DashboardModule,
  ],
  exports: [ContentComponent],
})
export class ContentModule { }
