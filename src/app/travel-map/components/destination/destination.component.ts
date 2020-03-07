import { Component, Input } from '@angular/core';
import { Destination } from 'src/app/data/models/destination.model';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.less']
})
export class DestinationComponent {
  @Input() public destination: Destination;
}
