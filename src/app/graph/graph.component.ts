import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  states: Set<string>;
  cases: number[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getStates().subscribe(
    (states) => {this.states = states}  
    );
  }

  onLoad() {
    this.dataService.getCases("New York").subscribe(
      (s) => {this.cases = s}
    )
  }
}
