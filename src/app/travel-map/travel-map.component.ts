import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../data/services/destination/destination.service';
import { Observable } from 'rxjs';
import { Spot, Destination } from '../data/models/destination.model';

@Component({
  selector: 'app-travel-map',
  templateUrl: './travel-map.component.html',
  styleUrls: ['./travel-map.component.less']
})
export class TravelMapComponent implements OnInit {
  public spots$: Observable<Spot[]>;
  public destinations$: Observable<Destination[]>;


  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.spots$ = this.destinationService.getAllSpots();
    this.destinations$ = this.destinationService.getAllDestinations();
  }

}
