import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { STATES } from './mock-states';

import * as d3 from "d3";
import { DataPoint } from './DataPoint';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  rawData: DataPoint[] = [];
  constructor() {
    this.getData();
   }

  getData() {
    d3.csv('https://raw.githubusercontent.com/nytimes/covid-19-data/master/us-states.csv')
    .then((data) => {this.rawData = data});
  }
  getStates(): Observable<Set<string>> {
    return of(new Set(this.rawData.map(d => d.state)));
  }
  getCases(state: string): Observable<number[]> {
    return of(
      this.rawData
        .filter((d) => {d.state == "New York"})
        .map((d)=>{return d.cases})
      )
  }
}
