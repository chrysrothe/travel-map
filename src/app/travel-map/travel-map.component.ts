import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../data/services/destination/destination.service';
import { Observable } from 'rxjs';
import { Spot, Destination, Location} from '../data/models/destination.model';
import { LocationService } from './services/location/location.service';

@Component({
  selector: 'app-travel-map',
  templateUrl: './travel-map.component.html',
  styleUrls: ['./travel-map.component.less']
})
export class TravelMapComponent implements OnInit {
  public location$: Observable<Location>;
  public destinations$: Observable<Destination[]>;
  public spots$: Observable<Spot[]>;

  constructor(
    private destinationService: DestinationService,
    private locationService: LocationService,
  ) {}

  ngOnInit(): void {
    this.spots$ = this.destinationService.getAllSpots();
    this.destinations$ = this.destinationService.getAllDestinations();
    this.location$ = this.locationService.getLocation();
  }

  public onMapCenterChange(center: google.maps.LatLng): void {
    this.locationService.updateQueryParams({ latlng: center.toUrlValue() });
  }

  onMapZoomChange(zoom: number): void {
    this.locationService.updateQueryParams({ zoom });
  }
}
