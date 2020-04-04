import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {
  @Input() labels: string[] = [];
  @Input('datasets') barChartData: ChartDataSets[] = [];
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

  ngOnChanges() {
    this.barChartLabels = this.labels;
  }
}
