import { Component, OnInit, Input } from '@angular/core';
import { Destination } from 'src/app/data/models/destination.model';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.less']
})
export class DestinationListComponent {
  @Input() destinations: Destination[];
}
