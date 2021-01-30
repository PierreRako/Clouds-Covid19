import { Component, OnInit } from '@angular/core';
import { MainPageService } from '../services/main-page.service';

@Component({
  selector: 'app-summary-worldwide',
  templateUrl: './summary-worldwide.component.html',
  styleUrls: ['./summary-worldwide.component.css']
})
export class SummaryWorldwideComponent implements OnInit {
  newCases:number;
  totalCases: number;
  newDeaths: number;
  totalDeaths: number;
  newRecovered: number;
  totalRecovered: number;
  activeCases: number;
  recoveryRate: number;
  mortalityRate: number;

  constructor(public mainPageService: MainPageService) { }

  ngOnInit(): void {
    this.mainPageService.getWorldwideData().subscribe((data)=>{
      this.newCases = data.Global.NewConfirmed;
      this.totalCases = data.Global.TotalConfirmed;
      this.newDeaths = data.Global.NewDeaths;
      this.totalDeaths = data.Global.TotalDeaths;
      this.newRecovered = data.Global.NewRecovered;
      this.totalRecovered = data.Global.TotalRecovered;

      this.activeCases = this.totalCases - this.totalRecovered - this.totalDeaths;
      this.recoveryRate = (this.totalRecovered / this.totalCases)*100;
      this.mortalityRate = (this.totalDeaths/this.totalCases)*100;
    })
  }

}
