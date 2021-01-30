import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../services/main-page.service';

@Component({
  selector: 'app-daily-cases-worldwide',
  templateUrl: './daily-cases-worldwide.component.html',
  styleUrls: ['./daily-cases-worldwide.component.css']
})
export class DailyCasesWorldwideComponent implements OnInit {

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


  constructor(public mainPageService: MainPageService) { }
  
  ngOnInit(): void {
    this.mainPageService.getDailyCases(8).subscribe((data)=>{

      // retrieve API's raw data
      this.barChartLabels = Object.keys(data["cases"]);
      this.dailyCases = Object.values(data["cases"]);
      this.dailyRecovered = Object.values(data["recovered"]);
      this.dailyDeaths = Object.values(data["deaths"]);

      // compute the data we actually want to display
      for (let i = 7; i>0; i--){
        this.dailyCases[i]-= this.dailyCases[i-1];
        this.dailyRecovered[i]-=this.dailyRecovered[i-1];
        this.dailyDeaths[i]-=this.dailyDeaths[i-1];
      }
      this.dailyCases.shift();
      this.dailyRecovered.shift();
      this.dailyDeaths.shift();
      this.barChartLabels.shift();

      // bar data object :
      this.barChartData = [{data: this.dailyCases, label: "Cases"},
      {data: this.dailyRecovered, label: "Recovered"},
      {data: this.dailyDeaths, label: "Deaths"}]
      //console.log(this.dailyDeaths);
      //console.log(this.barChartLabels);
    }
    )
  }

}
