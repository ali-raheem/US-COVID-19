import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';
import { StatePickerComponent } from './state-picker/state-picker.component';
import { StateSelectComponent } from './state-select/state-select.component';
import { GraphComponent } from './graph/graph.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    StatePickerComponent,
    StateSelectComponent,
    GraphComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
