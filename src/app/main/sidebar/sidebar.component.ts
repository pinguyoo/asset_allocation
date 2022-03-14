import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Navigation {
  icon: string;
  name: string;
  path: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  expanded = true;
  navigations: Navigation[];

  constructor(private readonly router: Router) {
    this.navigations = [
      {
        icon: 'dashboard',
        name: 'Dashboard',
        path: 'dashboard',
      },
      {
        icon: 'grid_on',
        name: 'Asset',
        path: 'asset',
      },
      {
        icon: 'history',
        name: 'History',
        path: 'history',
      },
    ];
  }

  ngOnInit(): void {}

  onClick() {
    this.expanded = !this.expanded;
  }

  onNavigate(path: string) {
    this.router.navigate([`./${path}`]);
  }

  tracker(index: number) {
    return index;
  }
}
