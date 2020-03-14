import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../data/services/destination/destination.service';
import { Observable } from 'rxjs';
import { Spot, Destination, Location} from '../data/models/destination.model';
import { LocationService } from './services/location/location.service';
import { MapLocationService } from './services/map-location/map-location.service';

@Component({
  selector: 'app-travel-map',
  templateUrl: './travel-map.component.html',
  styleUrls: ['./travel-map.component.less']
})
export class TravelMapComponent implements OnInit {
  public location$: Observable<google.maps.LatLng>;
  public zoom$: Observable<number>;
  public destinations$: Observable<Destination[]>;
  public spots$: Observable<Spot[]>;
  public randomSpot$: Observable<Spot>;
  public destinationForLightBox$: Observable<Destination>;

  public isLightBoxActive: boolean = false;
  public clickedSpot: Spot;

  constructor(
    private destinationService: DestinationService,
    private locationService: LocationService,
    private mapLocationService: MapLocationService
  ) {}

  ngOnInit(): void {
    this.spots$ = this.destinationService.getAllSpots();
    this.destinations$ = this.destinationService.getAllDestinations();
    this.location$ = this.mapLocationService.getLocation();
    this.zoom$ = this.mapLocationService.getZoom();
    this.randomSpot$ = this.destinationService.getRandomSpot();
  }

  public onMapCenterChange(center: google.maps.LatLng): void {
    this.locationService.updateQueryParams({ latlng: center.toUrlValue() });
  }

  public onMapZoomChange(zoom: number): void {
    this.locationService.updateQueryParams({ zoom });
  }

  public onMapSpotClick(spot: Spot): void {
    this.clickedSpot = spot;
    this.isLightBoxActive = true;
    this.destinationForLightBox$ = this.destinationService.getDestination(spot.destinatonKey);
  }

  public onLightBoxCloseClick(): void {
    this.isLightBoxActive = false;
  }

  public onSideBarFooterPrivacyClick(): void {
    this.locationService.redirectToPrivacy();
  }

  public onSideBarFooterImprintClick(): void {
    this.locationService.redirectToImprint();
  }

  public onSideBarFooterInstagramClick(): void {
    this.locationService.redirectToInstagram();
  }
}
