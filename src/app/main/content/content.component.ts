import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  get title(): string {
    return this.router.url.split('/')?.[1].toUpperCase();
  }

  constructor(private readonly router: Router) {
    console.log(this.router);
  }

  ngOnInit(): void {}
}
