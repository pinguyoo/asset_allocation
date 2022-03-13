import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './sidebar.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [SidebarComponent, NavigationComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
