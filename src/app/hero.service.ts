import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes'; // The HeroService could get hero data from anywhere—a 
// web service, local storage, or a mock data source.
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
// This marks the class as one that participates
// in the dependency injection system
@Injectable({ // accepts a metadata object for the service
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  /* The HeroService.getHeroes() method has a
    synchronous signature,which implies that
     the HeroService can fetch heroes synchronously.
     In real app fetch heroes from a remote server, 
     which is an inherently asynchronous operation.*/
  getHeroes(): Hero[] {
    return HEROES;
  }
  //*/
  /*getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  */
  /*
  will return an Observable because it will eventually
  use the Angular HttpClient.get method to fetch
  the heroes and HttpClient.get() returns an Observable.
  */
}
