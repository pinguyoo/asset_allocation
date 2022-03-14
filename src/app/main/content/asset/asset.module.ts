import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetComponent } from './asset.component';
import { AgGridModule } from 'ag-grid-angular';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [AssetComponent, StockComponent],
  imports: [CommonModule, AgGridModule],
})
export class AssetModule {}
