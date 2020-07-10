import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes'; // The HeroService could get hero data from anywhere—a 
// web service, local storage, or a mock data source.
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
// This marks the class as one that participates
// in the dependency injection system
@Injectable({ // accepts a metadata object for the service
  providedIn: 'root'
  /*
  You registered the HeroService as the provider of its
  service at the root level so that it can be injected
  anywhere in the app.
  */
})
//  "service-in-service" scenario
export class HeroService {
/*Angular will inject the singleton MessageService
 into that property when it creates the HeroService
*/
  constructor(private messageService: MessageService) { }
  /* The HeroService.getHeroes() method has a
    synchronous signature,which implies that
     the HeroService can fetch heroes synchronously.
     In real app fetch heroes from a remote server,
     which is an inherently asynchronous operation.
  getHeroes(): Hero[] {
    return HEROES;
  }
  */
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched Heroes');
    return of(HEROES);
  }
  /*
  will return an Observable because it will eventually
  use the Angular HttpClient.get method to fetch
  the heroes and HttpClient.get() returns an Observable.
  */
}
