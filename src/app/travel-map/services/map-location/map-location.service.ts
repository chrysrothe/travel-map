import { Injectable } from '@angular/core';
import { DestinationService } from 'src/app/data/services/destination/destination.service';
import { Observable, of } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Location } from 'src/app/data/models/destination.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { QueryParamsEnum } from '../../enums/params.enum';

@Injectable()
export class MapLocationService {
  constructor(
    private destinationService: DestinationService,
    private route: ActivatedRoute,
  ) {}

  public getLocation(): Observable<google.maps.LatLng> {
    return this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => {
        if (params.get(QueryParamsEnum.LatLng)) {
          const latlng = params.get(QueryParamsEnum.LatLng).split(',').map(x => +x);

          return of(new google.maps.LatLng(latlng[0], latlng[1]));
        }

        return this.destinationService
          .getLocationByDestination(params.get(QueryParamsEnum.Destination))
          .pipe(
            map((location: Location) => location.latlng)
          );
      })
    );
  }

  public getZoom(): Observable<number> {
    return this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => {
        if (params.get(QueryParamsEnum.Zoom)) {
          return of(parseInt(params.get(QueryParamsEnum.Zoom), 10));
        }

        return this.destinationService
        .getLocationByDestination(params.get(QueryParamsEnum.Destination))
        .pipe(
          map((location: Location) => location.zoom)
        );
      })
    );
  }
}
