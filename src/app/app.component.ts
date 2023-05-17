import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  logout() {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router) {}

  get isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Budgets', url: '/budgets', icon: 'cash' },
    { title: 'Requisitions', url: '/requisition', icon: 'clipboard' },
    { title: 'Expenses', url: '/expenses', icon: 'archive' },
    { title: 'Reports', url: '/reports', icon: 'albums' },
    { title: 'Users', url: '/users', icon: 'people' },
    { title: 'Profile', url: '/profile', icon: 'person' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
  ];
}
