import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../data/services/destination/destination.service';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Spot, Destination, Location} from '../data/models/destination.model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router,
    private destinationService: DestinationService
  ) {}

  ngOnInit(): void {
    this.spots$ = this.destinationService.getAllSpots();
    this.destinations$ = this.destinationService.getAllDestinations();

    this.location$ = this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => {
        if (params.get('latlng') && params.get('zoom')) {
          const latlng = params.get('latlng').split(',').map(x => +x);

          return of({
            latlng: new google.maps.LatLng(latlng[0], latlng[1]),
            zoom: parseInt(params.get('zoom'), 10),
          } as unknown as Location);
        }

        return this.destinationService.getLocationByDestination(params.get('destination'));
      })
    );
  }

  public onMapCenterChange(center: google.maps.LatLng): void {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { latlng: center.toUrlValue() },
        queryParamsHandling: 'merge'
      }
    );
  }

  onMapZoomChange(zoom: number): void {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { zoom },
        queryParamsHandling: 'merge'
      }
    );
  }

}
