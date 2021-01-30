import { Component, Input, OnInit } from '@angular/core';
import { CountryPageService } from '../services/country-page.service';
import { MainPageService } from '../services/main-page.service';

@Component({
  selector: 'app-cases-distribution-country',
  templateUrl: './cases-distribution-country.component.html',
  styleUrls: ['./cases-distribution-country.component.css']
})
export class CasesDistributionCountryComponent implements OnInit {

  @Input() slug:string;

  public name:string;

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

  constructor( private countryPageService: CountryPageService) { }

  ngOnInit(): void {
    this.countryPageService.getCountryAPICall(this.slug).subscribe((data)=>{
      var lastData = data.pop()
      this.name = lastData.Country;
      this.pieChartData.push(lastData.Deaths);
      this.pieChartData.push(lastData.Recovered);
      this.pieChartData.push(lastData.Active);    
    })
  }

}
