import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusService } from '../shared/services/bus.service';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss'],
})
export class ItineraryComponent implements OnInit {
  constructor(private route: ActivatedRoute, private busService: BusService) {}
  private itineraryId: string;
  public routes: any;
  public routesInfos: any;
  ngOnInit(): void {
    this.itineraryId = this.route.snapshot.paramMap.get('id');
    this.busService
      .getItinerary(this.route.snapshot.paramMap.get('id'))
      .subscribe((response) => {
        const obj = response;
        this.routesInfos = response;
        const clone = (({ idlinha, nome, codigo, ...o }) => o)(obj); // remove idlinha, nome, codigo

        this.routes = Object.values(clone);
      });
  }
}
