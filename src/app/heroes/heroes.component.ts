import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /* hero = 'Windstorm';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  */
  selectedHero: Hero;
  heroes: Hero[]; 
  // define a component property called heroes to expose the HEROES array for binding.
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();

  }
  constructor(private heroService: HeroService) { }
// The parameter simultaneously defines a private heroService 
// property and identifies it as a HeroService injection site.
  ngOnInit(): void {
    this.getHeroes();
  }

}
