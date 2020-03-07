import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Spot, Location } from 'src/app/data/models/destination.model';

import { GoogleMap} from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent {
  @Input() public spots: Spot[];
  @Input() public location: Location;

  @Output() public centerChange: EventEmitter<google.maps.LatLng> = new EventEmitter<google.maps.LatLng>();

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  public onMapDragend(): void {
    this.centerChange.emit(
      this.map.getCenter()
    );
  }

}
