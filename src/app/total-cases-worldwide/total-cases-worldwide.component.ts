import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../services/main-page.service';

@Component({
  selector: 'app-total-cases-worldwide',
  templateUrl: './total-cases-worldwide.component.html',
  styleUrls: ['./total-cases-worldwide.component.css']
})
export class TotalCasesWorldwideComponent implements OnInit {

  public totalCases: number[];
  public totalRecovered: number[];
  public totalDeaths:number[];

  public lineChartLabels: string[];

  public lineChartData: 
    { data: number[]; label: string; }[] = [];

  public lineChartColor:any = [
    {
      backgroundColor: 'rgba(255, 235, 205,0.5)' 
    },
    {
      backgroundColor: 'rgba(236, 248, 127,0.7)'
    },
    {
      backgroundColor: 'rgba(255, 150, 54,1)'
    }
  ]

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor(public mainPageService: MainPageService) { }

  ngOnInit(): void {
    this.mainPageService.getDailyCases("all").subscribe((data)=>{
      this.lineChartLabels = Object.keys(data["cases"]);
      this.totalCases = Object.values(data["cases"]);
      this.totalRecovered = Object.values(data["recovered"]);
      this.totalDeaths = Object.values(data["deaths"]);

      this.lineChartData = [
        { data: this.totalCases, label:'Total Cases'},
        { data: this.totalRecovered, label:'Total Recovered'},
        { data: this.totalDeaths, label:'Total Deaths'}
      ]
    }
    )
  }

}
