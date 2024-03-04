import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  name = 'Marvin Nyingi';
  router = inject(Router);

  logout() {
    this.router.navigateByUrl('/register', { skipLocationChange: true });
  }
}
