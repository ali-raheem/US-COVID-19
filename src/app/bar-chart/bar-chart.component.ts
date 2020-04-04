import { Component, OnInit, Input } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { strict } from 'assert';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() data: number[] = [];
  @Input() labels: string[] = [];
  @Input() barChartData: ChartDataSets[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.labels;
  barChartType: ChartType = 'line';
  barChartLegend = true;
  barChartPlugins = [];

  onLoad() {
    this.barChartData = [
      { data: this.data, label: 'New York' }
      ];
    this.barChartLabels = this.labels;
  }
}
