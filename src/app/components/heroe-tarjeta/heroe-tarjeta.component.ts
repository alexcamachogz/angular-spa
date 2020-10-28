import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent {
  @Input() heroe = {}
  @Input() index: number

  constructor(private router: Router) {}

  verHeroe(): void {
    this.router.navigate(['/heroe', this.index])
  }
}
