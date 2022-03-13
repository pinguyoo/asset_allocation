import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ContentRoutingModule } from './content-routing.module';
import { HistoryModule } from './history/history.module';

@NgModule({
  declarations: [ContentComponent],
  imports: [CommonModule, ContentRoutingModule, DashboardModule, HistoryModule],
  exports: [ContentComponent],
})
export class ContentModule {}
