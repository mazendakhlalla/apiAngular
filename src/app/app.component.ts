import { Component, OnInit } from '@angular/core';
import { TimeDataService } from './services/time-data.service';
import { MainTimeData } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private timeservice: TimeDataService) {}
  timeData?: MainTimeData;
  ngOnInit(): void {
    this.timeservice.getTimeData().subscribe({
      next: (response) => {
        this.timeData = response;
      },
    });
  }
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public lineChartLabels = [this.timeData?.['Meta Data']['4. Interval']];

  public lineChartLegend = true;

  public lineChartData = [
    {
      data: this.timeData?.['Meta Data']['6. Time Zone'],
      label: 'low',
      type: 'line',
    },
    {
      data: this.timeData?.['Time Series (30min)'],
      label: 'high',
      type: 'line',
    },
  ];
  title = 'apiAngular';
}
