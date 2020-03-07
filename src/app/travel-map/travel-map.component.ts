import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../data/services/destination/destination.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Spot, Destination, Location} from '../data/models/destination.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
    private destinationService: DestinationService
  ) {}

  ngOnInit(): void {
    this.spots$ = this.destinationService.getAllSpots();
    this.destinations$ = this.destinationService.getAllDestinations();

    this.location$ = this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => {
        console.log(this.destinationService.getLocationByDestination(params.get('destination')));
        return this.destinationService.getLocationByDestination(params.get('destination'));
      })
    );
  }

}
