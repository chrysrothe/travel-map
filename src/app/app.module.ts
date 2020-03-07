import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TravelMapModule } from './travel-map/travel-map.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    TravelMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
