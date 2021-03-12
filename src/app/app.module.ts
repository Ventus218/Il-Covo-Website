import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ReservationsPageComponent } from './pages/reservations-page/reservations-page.component';
import { ReservationComponent } from './pages/reservations-page/components/reservation/reservation.component';
import { TilesSectionComponent } from './components/tiles-section/tiles-section.component';
import { TileComponent } from './components/tile/tile.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationBarComponent,
    ReservationsPageComponent,
    ReservationComponent,
    TilesSectionComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
