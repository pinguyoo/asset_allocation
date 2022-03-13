import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  @Input()
  mode: 'full' | 'brief' = 'full';

  @Input()
  icon = '';

  @Input()
  name = '';

  @Input()
  size: 'small' | 'medium' = 'medium';

  constructor() {}

  ngOnInit(): void {}
}
