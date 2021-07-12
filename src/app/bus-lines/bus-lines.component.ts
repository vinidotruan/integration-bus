import { Component, Input, OnInit } from '@angular/core';
import { BusService } from '../shared/services/bus.service';

@Component({
  selector: 'app-bus-lines',
  templateUrl: './bus-lines.component.html',
  styleUrls: ['./bus-lines.component.scss'],
})
export class BusLinesComponent implements OnInit {
  @Input() searchTerm?: string;
  constructor(private busService: BusService) {}

  public busLines = [];
  ngOnInit(): void {
    this.busService
      .getBusLines()
      .subscribe((response) => (this.busLines = response));
  }

  get allBusLines() {
    if (this.searchTerm) {
      return this.busLines.filter((line) =>
        line.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    return this.busLines;
  }
}
