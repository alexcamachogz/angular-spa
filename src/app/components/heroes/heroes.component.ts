import { Component, OnInit } from '@angular/core'
import { HeroesService, Heroe } from '../../services/heroes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.styl']
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = []

  constructor(private heroesServices: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.heroes = this.heroesServices.getHeroes()
  }

  verHeroe(idx: number): void {
    this.router.navigate(['/heroe', idx])
  }
}
