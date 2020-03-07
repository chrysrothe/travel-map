import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../data/services/destination/destination.service';
import { Observable } from 'rxjs';
import { Spot } from '../data/models/destination.model';

@Component({
  selector: 'app-travel-map',
  templateUrl: './travel-map.component.html',
  styleUrls: ['./travel-map.component.less']
})
export class TravelMapComponent implements OnInit {
  public spots$: Observable<Spot[]>;

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.ngOnInit = this.destinationService.getAllSpots;
  }

}
