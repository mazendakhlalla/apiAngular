import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public lineChartLabels = ['low', 'high', 'open'];

  public lineChartLegend = true;

  public lineChartData = [
    { data: [50, 60, 25, 77, 41], label: 'low', type: 'line' },
    { data: [40, 59, 68, 78, 88], label: 'high', type: 'line' },
    { data: [35, 78, 21, 47, 23, 15], label: 'open', type: 'line' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
