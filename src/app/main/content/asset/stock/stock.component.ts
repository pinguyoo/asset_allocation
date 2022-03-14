import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  columnDefs: ColDef[] = [
    { field: 'Stock' },
    { field: 'Share' },
    { field: 'Average Price' },
    { field: 'Current Price' },
    { field: 'Percentage' },
  ];

  rowData = [
    {
      Stock: 'TSLA',
      Share: '2',
      'Average Price': '700',
      'Current Price': '800',
      Percentage: '50%',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
