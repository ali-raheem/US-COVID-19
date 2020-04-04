import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';


const routes: Routes = [
  {path: "", redirectTo: "/chart", pathMatch: "full"},
  {path: "chart", component: GraphComponent},
  {path: "barChart", component: BarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
