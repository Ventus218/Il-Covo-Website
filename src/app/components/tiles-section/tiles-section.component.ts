import { Component, Input, OnInit } from '@angular/core';
import { TileRepresentable } from 'src/app/models/tile-representable';
import { FunsManagerService } from 'src/app/services/funs-manager/funs-manager.service';
import { RulesManagerService } from 'src/app/services/rules-manager/rules-manager.service';


@Component({
  selector: 'app-tiles-section',
  templateUrl: './tiles-section.component.html',
  styleUrls: ['./tiles-section.component.css']
})
export class TilesSectionComponent implements OnInit {

  private funsService: FunsManagerService

  @Input() title?: String

  @Input() typeOfTileObjects!: TypeOfTileObject

  tiles!: TileRepresentable[]

  isWaitingForData: Boolean = true

  constructor(private jsonService: FunsManagerService, private rulesService: RulesManagerService) {
    this.funsService = jsonService
  }

  ngOnInit(): void {
    
    if (this.typeOfTileObjects == TypeOfTileObject.RULE) {
      this.rulesService.getRules().subscribe(tiles => {
        this.tiles = tiles
        this.isWaitingForData = false
      })
    } else {
      this.funsService.getFuns().subscribe(tiles => {
        this.tiles = tiles
        this.isWaitingForData = false
      })
    }
  }
}

export enum TypeOfTileObject {
  FUN = 0,
  RULE = 1
}