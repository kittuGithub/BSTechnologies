import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    const chart = am4core.create('chartdiv', am4charts.PieChart3D);
    // Create pie series
    const series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = 'total';
    series.dataFields.category = 'gender';

    // Add data
    chart.data = [
      {
        'gender': 'Male',
        'total': 300
      },
      {
        'gender': 'Female',
        'total': 100
      }
      ];

    chart.legend = new am4charts.Legend();
  }

}
