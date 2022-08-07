import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public activeLink = "";
  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) this.activeLink = event.url
    })
  }

  links = [
    { url: '/', title: 'Main' },
    { url: '/for-psychologists', title: 'For Psychologists' },
    { url: '/for-clients', title: 'For Clients' },
    { url: '/registration', title: 'Registration' },
    { url: '/authentication', title: 'Authentication' }
  ];
}
