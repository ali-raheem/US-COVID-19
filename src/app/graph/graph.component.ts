import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  states: Set<string>;
  cases: number[];
  dates: string[];
  datasets: ChartDataSets[];
  state: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getStates().subscribe(
    (states) => {this.states = states}  
    );
    this.state = "New York";
  }

  onLoad() {
    this.dataService.getCases(this.state).subscribe(
      (s) => {this.cases = s;
              console.log("get cases", JSON.stringify(s))}
    )
    this.dataService.getDates(this.state).subscribe(
      (s) => {
        this.dates = s.map(d => {return d.toString()});
        console.log("get dates", JSON.stringify(this.dates))
      });
      this.datasets = [
        { data: this.cases, label: this.state }
        ];
  }

  onChart() {

    //this.datasets = this.labels;
  }
}
