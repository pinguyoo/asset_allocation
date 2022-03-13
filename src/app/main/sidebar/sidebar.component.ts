import { Component, OnInit } from '@angular/core';

interface Navigation {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  expanded = true;
  navigations: Navigation[];

  constructor() {
    this.navigations = [
      {
        icon: 'dashboard',
        name: 'Dashboard',
      },
      {
        icon: 'history',
        name: 'History',
      },
    ];
  }

  ngOnInit(): void {}

  onClick() {
    this.expanded = !this.expanded;
  }

  tracker(index: number) {
    return index;
  }
}
