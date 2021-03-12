import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation/reservation';
import { ReservationsService } from './services/reservations.service';

@Component({
  selector: 'app-reservations-page',
  templateUrl: './reservations-page.component.html',
  styleUrls: ['./reservations-page.component.css']
})
export class ReservationsPageComponent implements OnInit {

  reservations?: Reservation[]
  isWaitingForData: Boolean = true

  constructor(private reservationsService: ReservationsService) { }

  ngOnInit(): void {
    this.reservationsService.getReservations().subscribe( reservations => {
      this.reservations = reservations
      .map(r => new Reservation(r.author, r.startDate, r.endDate, r.details))
      this.isWaitingForData = false
    })
  }

}
