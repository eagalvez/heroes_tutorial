import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
/*
This part configure you configure your
routes. Routes tell the Router which view to display when a
 user clicks a link or pastes a URL into the browser address bar.
*/
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
/*When the app starts, the browser's address bar points to
 the web site's root. That doesn't match any existing route
 this line set up a default route to dashboard
*/
// This route redirects a URL that fully matches
// the empty path to the route whose path is '/dashboard'

{ path: 'detail/:id', component: HeroDetailComponent},
// The colon (:) in the path indicates that :id is a placeholder for a specific hero id.

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
