import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Destination, Spot } from '../../models/destination.model';
import { world } from '../../data/world';

@Injectable()
export class DestinationService {
  public getRootDestination(): Observable<Destination> {
    return of(world);
  }

  public getAllSpots(): Observable<Spot[]> {
    return this.getRootDestination().pipe(
      map((root: Destination) => {
        let spots: Spot[] = [];

        root.destinations.forEach((destination: Destination) => {
          spots = spots.concat(destination.spots);
        });

        return spots;
      })
    );
  }
}
