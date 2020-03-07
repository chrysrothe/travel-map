import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Destination, Spot, Location } from '../../models/destination.model';
import { world } from '../../data/world';

@Injectable()
export class DestinationService {
  private getRootDestination(): Observable<Destination> {
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

  public getAllDestinations(): Observable<Destination[]> {
    return this.getRootDestination().pipe(
      map((root: Destination) => root.destinations)
    );
  }

  public getDestination(destinationKey: string): Observable<Destination> {
    return this.getRootDestination().pipe(
      map((root: Destination) => {
        if (root.name === destinationKey) {
          return root;
        }

        return root.destinations.find((destination: Destination) => destination.key === destinationKey) ?? root;
      }),
    );
  }

  public getLocationByDestination(destinationKey: string): Observable<Location> {
    return this.getDestination(destinationKey).pipe(
      map((destination: Destination) => destination.location)
    );
  }
}
