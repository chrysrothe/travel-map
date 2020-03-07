import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationService } from './services/destination/destination.service';

@NgModule({
  providers: [
    DestinationService,
  ],
  entryComponents: [
    DestinationService,
  ]
})
export class DataModule { }
