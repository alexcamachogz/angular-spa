import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent {
  @Input() heroe = {}
  @Input() index: number

  @Output() heroSelected: EventEmitter<number>

  constructor(private router: Router) {
    this.heroSelected = new EventEmitter()
  }

  verHeroe(): void {
    this.router.navigate(['/heroe', this.index])
  }
}
