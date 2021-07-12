import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusLinesComponent } from './bus-lines/bus-lines.component';
import { HomeComponent } from './home/home.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { MicroBusLinesComponent } from './micro-bus-lines/micro-bus-lines.component';

const routes: Routes = [
  {
    path: 'bus-lines',
    component: BusLinesComponent,
  },
  {
    path: 'micro-bus-lines',
    component: MicroBusLinesComponent,
  },
  {
    path: 'itinerary/:id',
    component: ItineraryComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
