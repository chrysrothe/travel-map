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
import { LightBoxComponent } from './components/light-box/light-box.component';
import { MapLocationService } from './services/map-location/map-location.service';
import { SideBarFooterComponent } from './components/side-bar-footer/side-bar-footer.component';
import { WindowService } from './services/window/window.service';
import { LightBoxService } from './services/light-box/light-box.service';

@NgModule({
  declarations: [
    TravelMapComponent,
    MapComponent,
    SideBarComponent,
    DestinationListComponent,
    DestinationComponent,
    LightBoxComponent,
    SideBarFooterComponent
  ],
  imports: [
    CommonModule,
    DataModule,
    GoogleMapsModule,
    TravelMapRoutingModule,
  ],
  providers: [
    LightBoxService,
    LocationService,
    MapLocationService,
    WindowService,
  ]
})
export class TravelMapModule { }
