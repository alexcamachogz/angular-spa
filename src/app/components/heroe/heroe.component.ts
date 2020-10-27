import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HeroesService } from '../../services/heroes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  heroe = {}
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.heroe = this.heroesService.getHeroe(params.id)
    })
  }

  goBack(): void {
    this.router.navigate(['/heroes'])
  }
}
