import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { ContentModule } from './content/content.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    ContentModule,
    SidebarModule,
  ],
  exports: [MainComponent],
})
export class MainModule { }
