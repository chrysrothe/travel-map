import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelMapComponent } from './travel-map.component';

const routes: Routes = [
  { path: 'map',  component: TravelMapComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class TravelMapRoutingModule {}