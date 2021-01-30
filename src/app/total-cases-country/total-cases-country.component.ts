import { Component, Input, OnInit } from '@angular/core';
import { CountryPageService } from '../services/country-page.service';

@Component({
  selector: 'app-total-cases-country',
  templateUrl: './total-cases-country.component.html',
  styleUrls: ['./total-cases-country.component.css']
})
export class TotalCasesCountryComponent implements OnInit {

  @Input() slug:string;
  public name: string;

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

  constructor(private countryPageService: CountryPageService) { }

  ngOnInit(): void {
    this.countryPageService.getCountryAPICall(this.slug).subscribe((data)=>{
      this.name = data[0].Country;

      this.totalCases = data.map(e => +(e.Confirmed));

      this.totalRecovered = data.map(e => +(e.Recovered));

      this.totalDeaths = data.map(e => +(e.Deaths));

      this.lineChartLabels = data.map(e => (new Date(e.Date)).toDateString());

      this.lineChartData = [ 
        { data:  this.totalCases, label: "Total Cases" },
        { data:  this.totalRecovered, label: "Total Recovered" },
        { data:  this.totalDeaths, label: "Total Deaths"} ];
      
      console.log(this.lineChartData);
      
    })
  }

}
