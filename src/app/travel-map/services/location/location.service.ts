import { Injectable } from '@angular/core';
import { DestinationService } from 'src/app/data/services/destination/destination.service';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Location } from 'src/app/data/models/destination.model';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Injectable()
export class LocationService {
  constructor(
    private destinationService: DestinationService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  public getLocation(): Observable<Location> {
    return this.route.queryParamMap.pipe(
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

  public updateQueryParams(params: Params): void {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: params,
        queryParamsHandling: 'merge'
      }
    );
  }
}
