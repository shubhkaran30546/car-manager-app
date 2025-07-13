import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-buttons',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navigation-buttons.component.html',
})
export class NavigationButtonsComponent {
  // TODO: Try to avoid any type
  @Input() hasNewBtn: any = undefined;
  @Input() hasBackBtn: any = undefined;
  @Input() hasGoToEditBtn: any = undefined;

  constructor(protected router: Router) {}

  ngOnInit() {
    this.hasNewBtn = this.hasNewBtn !== undefined;
    this.hasBackBtn = this.hasBackBtn !== undefined;
    this.hasGoToEditBtn = this.hasGoToEditBtn !== undefined;
  }

  get backBtnNavigation(): string {
    return this.router.url.includes('new') ? '../' : '../../';
  }
}
