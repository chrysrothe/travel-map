import { Component, OnInit, Input } from '@angular/core';
import { Spot, Location } from 'src/app/data/models/destination.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  @Input() public spots: Spot[];
  @Input() public location: Location;

  constructor() { }

  ngOnInit(): void {
    console.log(this.location);
  }

}
