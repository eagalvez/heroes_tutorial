import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
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


  constructor(private heroService: HeroService,
              private messageService: MessageService) { }
// The parameter simultaneously defines a private heroService 
// property and identifies it as a HeroService injection site.

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  /*
  The new version waits for the Observable to emit
  the array of heroes—which could happen now or several
  minutes from now. The subscribe() method passes the
  emitted array to the callback,
   which sets the component's heroes property.
  */
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`Heroes component: 
    Selected hero id=${hero.id}`);
  }
}
