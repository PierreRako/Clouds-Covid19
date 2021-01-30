import { Component, Input, OnInit } from '@angular/core';
import { CountryPageService } from '../services/country-page.service';

@Component({
  selector: 'app-daily-cases-country',
  templateUrl: './daily-cases-country.component.html',
  styleUrls: ['./daily-cases-country.component.css']
})
export class DailyCasesCountryComponent implements OnInit {

  @Input() slug:string;
  public name: string;

  public dailyCases: number[];
  public dailyRecovered: number[];
  public dailyDeaths: number[];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels: string[];

  // Not compact at all but didn't find a way to simply change the bar color of a whole serie
  public barChartColor:any = [
    {
      backgroundColor: ['rgba(255, 235, 205,0.7)',
      'rgba(255, 235, 205,0.7)',
      'rgba(255, 235, 205,0.7)',
      'rgba(255, 235, 205,0.7)',
      'rgba(255, 235, 205,0.7)',
      'rgba(255, 235, 205,0.7)',
      'rgba(255, 235, 205,0.7)'
      ]
    },
    {
      backgroundColor: ['rgba(236, 248, 127,0.7)',
      'rgba(236, 248, 127,0.7)',
      'rgba(236, 248, 127,0.7)',
      'rgba(236, 248, 127,0.7)',
      'rgba(236, 248, 127,0.7)',
      'rgba(236, 248, 127,0.7)',
      'rgba(236, 248, 127,0.7)'
      ]
    },
    {
      backgroundColor: ['rgba(255, 150, 54,0.7)',
      'rgba(255, 150, 54,0.7)',
      'rgba(255, 150, 54,0.7)',
      'rgba(255, 150, 54,0.7)',
      'rgba(255, 150, 54,0.7)',
      'rgba(255, 150, 54,0.7)',
      'rgba(255, 150, 54,0.7)'
      ]
    }
  ]
  
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData: { data: number[]; label: string; }[] = [];


  constructor(private countryPageService: CountryPageService) { }

  ngOnInit(): void {
    this.countryPageService.getCountryAPICall(this.slug).subscribe((data)=>{
      data = data.slice(data.length - 8,data.length);
      this.name = data[0].Country;
      this.dailyCases = data.map(e => +(e.Confirmed));
      this.dailyDeaths = data.map(e => +(e.Deaths));
      this.dailyRecovered = data.map(e => +(e.Recovered));
      this.barChartLabels = data.map(e => (new Date(e.Date)).toDateString());

      console.log(this.barChartLabels);
      console.log(this.dailyCases);

      for (let i = 7; i>0; i--){
        this.dailyCases[i]-= this.dailyCases[i-1];
        this.dailyRecovered[i]-=this.dailyRecovered[i-1];
        this.dailyDeaths[i]-=this.dailyDeaths[i-1];
      }
      this.dailyCases.shift();
      this.dailyRecovered.shift();
      this.dailyDeaths.shift();
      this.barChartLabels.shift();

      this.barChartData = [{data: this.dailyCases, label: "Cases"},
      {data: this.dailyRecovered, label: "Recovered"},
      {data: this.dailyDeaths, label: "Deaths"}]
    });
  }

}
