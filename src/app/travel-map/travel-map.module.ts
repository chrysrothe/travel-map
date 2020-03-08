import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataModule } from '../data/data.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { TravelMapRoutingModule } from './travel-map-routing.module';

import { MapComponent } from './components/map/map.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TravelMapComponent } from './travel-map.component';
import { DestinationListComponent } from './components/destination-list/destination-list.component';
import { DestinationComponent } from './components/destination/destination.component';

import { LocationService } from './services/location/location.service';

@NgModule({
  declarations: [
    TravelMapComponent,
    MapComponent,
    SideBarComponent,
    DestinationListComponent,
    DestinationComponent
  ],
  imports: [
    CommonModule,
    DataModule,
    GoogleMapsModule,
    TravelMapRoutingModule,
  ],
  providers: [
    LocationService,
  ]
})
export class TravelMapModule { }
