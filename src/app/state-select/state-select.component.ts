import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-state-select',
  templateUrl: './state-select.component.html',
  styleUrls: ['./state-select.component.css']
})
export class StateSelectComponent implements OnInit {
  @Input('name') state: string;
  constructor() { }

  ngOnInit(): void {
  }

}
