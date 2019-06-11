import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: 'intro.page.html',
  styleUrls: ['intro.page.scss'],
})
export class IntroPage {

  constructor(private router: Router) {
    if (JSON.parse(localStorage.getItem('welcomeSkipped'))) {
      this.router.navigate(['/category']);
    }
  }

  dirToUser() {
    localStorage.setItem('welcomeSkipped', JSON.stringify(true));
    this.router.navigate(['/category']);
  }
}
