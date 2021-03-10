import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/Reservation/reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  @Input() reservation!: Reservation

  constructor() { }

  ngOnInit(): void {
  }

}
