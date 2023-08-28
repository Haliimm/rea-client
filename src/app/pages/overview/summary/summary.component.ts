import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  @ViewChild('salseRevenueCanvas', { static: true })
  salseRevenueCanvas!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    const ctx2 = this.salseRevenueCanvas.nativeElement.getContext('2d');
    const myChart2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [
          {
            label: 'Salse',
            data: [15, 30, 55, 45, 70, 65, 85],
            backgroundColor: 'rgba(0, 156, 255, .5)',
            fill: true,
          },
          {
            label: 'Revenue',
            data: [99, 135, 170, 130, 190, 180, 270],
            backgroundColor: 'rgba(0, 156, 255, .3)',
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
    console.log(myChart2);
  }

  // Data untuk grafik
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels = ['Transportation', 'Hotel', 'Ticket'];
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80], label: 'Transportation' },
    { data: [28, 48, 40], label: 'Hotel' },
  ];
}
