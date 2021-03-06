import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero; 
  // You used the @Input decorator to make the hero property 
  // available for binding by the external HeroesComponent.
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    // + converts string to number
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }
}
