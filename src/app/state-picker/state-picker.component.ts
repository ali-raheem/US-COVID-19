import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-state-picker',
  templateUrl: './state-picker.component.html',
  styleUrls: ['./state-picker.component.css']
})

export class StatePickerComponent implements OnInit, AfterViewInit {
  @Input() states: string[];
  @Output() load: EventEmitter<any> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();
  @Output() state: EventEmitter<any> = new EventEmitter();
  @Output('enabledStates') enabledStatesEvents: EventEmitter<string[]> = new EventEmitter<string[]>();

  enabledStates: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.clickStates();
  }
  clickLoad() {
    this.load.emit(null);
  }
  clickReset() {
    this.reset.emit(null);
    this.enabledStates = [];
  }
  clickStates() {
    this.state.emit(null);
  }

  toggleState(s) {
    if(!this.enabledStates.includes(s)) {
      this.enabledStates.push(s);
    } else {
      this.enabledStates = this.enabledStates.filter((d) => {d.indexOf(s) == -1})
    }
    this.enabledStatesEvents.emit(this.enabledStates);
    console.log("toggle", JSON.stringify(this.enabledStates));
  }
}
