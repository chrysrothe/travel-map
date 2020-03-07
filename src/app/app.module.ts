import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TravelMapModule } from './travel-map/travel-map.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TravelMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
