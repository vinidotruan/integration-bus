import { Component, Input, OnInit } from '@angular/core';
import { BusService } from '../shared/services/bus.service';

@Component({
  selector: 'app-micro-bus-lines',
  templateUrl: './micro-bus-lines.component.html',
  styleUrls: ['./micro-bus-lines.component.scss'],
})
export class MicroBusLinesComponent implements OnInit {
  @Input() searchTerm?: string;
  public microBusLines = [];
  constructor(private busService: BusService) {}

  ngOnInit(): void {
    this.busService
      .getMicroBusLines()
      .subscribe((response) => (this.microBusLines = response));
  }

  get allMicroBusLines() {
    if (this.searchTerm) {
      return this.microBusLines.filter((line) =>
        line.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    return this.microBusLines;
  }
}
