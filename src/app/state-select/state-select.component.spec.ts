import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateSelectComponent } from './state-select.component';

describe('StateSelectComponent', () => {
  let component: StateSelectComponent;
  let fixture: ComponentFixture<StateSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
