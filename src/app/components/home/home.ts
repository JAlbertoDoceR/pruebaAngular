import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html'
})
export class HomeComponent {
  constructor(private router: Router) {}

  salir() {
    this.router.navigate(['/']);
  }
}