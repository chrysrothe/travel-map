import { Component, OnInit, Input } from '@angular/core';
import { Spot } from 'src/app/data/models/destination.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
  @Input() public spots: Spot[];

  constructor() { }

  ngOnInit(): void {
  }

}
