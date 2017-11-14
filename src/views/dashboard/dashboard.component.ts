import { Component } from '@angular/core';
import * as ChartData from '../../config/data';
import { ChartReadyEvent } from 'ng2-google-charts';

@Component({
  selector: 'dash-comp',
  templateUrl: './dashboard.template.html'
})
export class Dashboard {
  
  public chartData;
  public steppedChartData;
  public pieChartData;
  public barChartData;
  public colChartData;
  
  constructor() {
    this.chartData = ChartData;
    this.steppedChartData = this.chartData.SteppedChartData;
    this.pieChartData = this.chartData.PieChartData;
    this.barChartData = this.chartData.BarChartData;
    this.colChartData = this.chartData.ColChartData;
  }
  
  
  public ready(event: ChartReadyEvent) {
    // do something
  }
}
