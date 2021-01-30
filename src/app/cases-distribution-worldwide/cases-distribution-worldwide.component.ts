import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../services/main-page.service';

@Component({
  selector: 'app-cases-distribution-worldwide',
  templateUrl: './cases-distribution-worldwide.component.html',
  styleUrls: ['./cases-distribution-worldwide.component.css']
})
export class CasesDistributionWorldwideComponent implements OnInit {

  public pieChartLabels = ['Dead cases', 'Recovered cases', 'Active cases'];
  public pieChartData = [];
  public pieChartOptions = {
    responsive: true
  }
  public pieChartColor:any = [
      {
          backgroundColor: ['rgba(255, 150, 54,0.7)',
            'rgba(236, 248, 127,0.7)',
            'rgba(255, 235, 205,0.7)'
          ]
      }
  ]
  public pieChartType = 'pie';

  constructor(public mainPageService: MainPageService) { }

  ngOnInit(): void {

    this.mainPageService.getWorldwideData().subscribe((data)=>{
      this.pieChartData.push(data.Global.TotalDeaths);
      this.pieChartData.push(data.Global.TotalRecovered);
      this.pieChartData.push(data.Global.TotalConfirmed - this.pieChartData[1] - this.pieChartData[0]);  
      //console.log(this.pieChartData)    
    })

  }

}
