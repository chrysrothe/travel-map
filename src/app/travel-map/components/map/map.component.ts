import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Spot, Location } from 'src/app/data/models/destination.model';

import { GoogleMap} from '@angular/google-maps';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent {
  @Input() public spots: Spot[];
  @Input() public location: google.maps.LatLng;
  @Input() public zoom: number;

  @Output() public centerChange: EventEmitter<google.maps.LatLng> = new EventEmitter<google.maps.LatLng>();
  @Output() public zoomChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() public spotClick: EventEmitter<Spot> = new EventEmitter<Spot>();

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  public onMapDragend(): void {
    this.centerChange.emit(
      this.map.getCenter()
    );
  }

  public onZoomChanged(): void {
    if (this.map === undefined) {
      return;
    }

    this.zoomChange.emit(
      this.map.getZoom()
    );

    this.centerChange.emit(
      this.map.getCenter()
    );
  }

  public onMarkerClicked(spot: Spot) {
    this.spotClick.emit(spot);
  }
}
