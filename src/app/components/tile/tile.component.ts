import { Component, OnInit, Input } from '@angular/core';
import { TileRepresentable } from 'src/app/models/tile-representable';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() tileRepresentable!: TileRepresentable;

  constructor() { }

  ngOnInit(): void {
  }

}
