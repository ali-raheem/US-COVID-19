import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-state-select',
  templateUrl: './state-select.component.html',
  styleUrls: ['./state-select.component.css']
})
export class StateSelectComponent implements OnInit {
  @Input('name') state: string;
  @Output() toggleState: EventEmitter<any> = new EventEmitter()
  enabled: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.enabled = !this.enabled;
    this.toggleState.emit(null);
  }


}
