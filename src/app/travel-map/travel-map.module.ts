import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelMapRoutingModule } from './travel-map-routing.module';

import { TravelMapComponent } from './travel-map.component';

@NgModule({
  declarations: [TravelMapComponent],
  imports: [
    CommonModule,
    TravelMapRoutingModule,
  ]
})
export class TravelMapModule { }
