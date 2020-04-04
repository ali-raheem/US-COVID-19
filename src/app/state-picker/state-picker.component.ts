import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-state-picker',
  templateUrl: './state-picker.component.html',
  styleUrls: ['./state-picker.component.css']
})

export class StatePickerComponent implements OnInit {
  @Input() states: string[];
  @Output() load: EventEmitter<any> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();
  @Output() state: EventEmitter<any> = new EventEmitter();
  @Output('enabledStates') enabledStatesEvents: EventEmitter<string[]> = new EventEmitter<string[]>();

  enabledStates: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  clickLoad() {
    this.load.emit(null);
  }
  clickReset() {
    this.reset.emit(null);
  }
  clickStates() {
    this.state.emit(null);
  }

  toggleState(s) {
    this.enabledStates.push(s);
    this.enabledStatesEvents.emit(this.enabledStates);
    console.log("toggle", JSON.stringify(this.enabledStates));
  }
}
