import { Injectable } from '@angular/core';
import { DestinationService } from 'src/app/data/services/destination/destination.service';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Location } from 'src/app/data/models/destination.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { QueryParamsEnum } from '../../enums/params.enum';

@Injectable()
export class MapLocationService {
  constructor(
    private destinationService: DestinationService,
    private route: ActivatedRoute,
  ) {}

  public getLocation(): Observable<Location> {
    return this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => {
        if (params.get(QueryParamsEnum.LatLng) && params.get(QueryParamsEnum.Zoom)) {
          const latlng = params.get(QueryParamsEnum.LatLng).split(',').map(x => +x);

          return of({
            latlng: new google.maps.LatLng(latlng[0], latlng[1]),
            zoom: parseInt(params.get(QueryParamsEnum.Zoom), 10),
          } as unknown as Location);
        }

        return this.destinationService.getLocationByDestination(params.get(QueryParamsEnum.Destination));
      })
    );
  }
}
