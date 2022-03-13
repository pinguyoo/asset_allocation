import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ContentRoutingModule } from './content-routing.module';

@NgModule({
  declarations: [ContentComponent],
  imports: [CommonModule, ContentRoutingModule, DashboardModule],
  exports: [ContentComponent],
})
export class ContentModule {}
