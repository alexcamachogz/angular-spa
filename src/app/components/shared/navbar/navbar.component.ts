import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent {
  constructor(private router: Router) {}
  searchHero(text: string): void {
    this.router.navigate(['/search', text])
  }
}
