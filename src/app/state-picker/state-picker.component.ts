import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-state-picker',
  templateUrl: './state-picker.component.html',
  styleUrls: ['./state-picker.component.css']
})

export class StatePickerComponent implements OnInit {
  @Input() states: string;
  @Output() load: EventEmitter<any> = new EventEmitter();
  @Output() reset: EventEmitter<any> = new EventEmitter();
  @Output() state: EventEmitter<any> = new EventEmitter();
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
}
