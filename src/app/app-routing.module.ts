import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ReservationComponent } from './pages/reservations-page/components/reservation/reservation.component';
import { ReservationsPageComponent } from './pages/reservations-page/reservations-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'prenotazioni', component: ReservationsPageComponent},
  { path: 'reservation', component: ReservationComponent}
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled' } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
