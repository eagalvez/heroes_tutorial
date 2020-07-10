import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
/*
This part configure you configure your
routes. Routes tell the Router which view to display when a
 user clicks a link or pastes a URL into the browser address bar.
*/
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // method supplies the service providers and
  // directives needed for routing
  exports: [RouterModule]
  // AppRoutingModule exports RouterModule so
  // it will be available throughout the app.
})
export class AppRoutingModule { }
