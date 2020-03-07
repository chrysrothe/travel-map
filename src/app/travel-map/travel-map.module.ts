import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelMapRoutingModule } from './travel-map-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';

import { TravelMapComponent } from './travel-map.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [TravelMapComponent, MapComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    TravelMapRoutingModule,
  ]
})
export class TravelMapModule { }
