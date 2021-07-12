import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusLinesComponent } from './bus-lines/bus-lines.component';
import { MicroBusLinesComponent } from './micro-bus-lines/micro-bus-lines.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BusLinesComponent,
    MicroBusLinesComponent,
    ItineraryComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
