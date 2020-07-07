import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels: Array<Label>;
  @Input('chartData') doughnutChartData: MultiDataSet;
  @Input('chartType') doughnutChartType: ChartType;

  constructor() { }

  ngOnInit(): void {
  }

}
