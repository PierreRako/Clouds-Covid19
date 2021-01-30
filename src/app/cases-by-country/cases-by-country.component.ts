import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { MainPageService } from '../services/main-page.service';

@Component({
  selector: 'app-cases-by-country',
  templateUrl: './cases-by-country.component.html',
  styleUrls: ['./cases-by-country.component.css']
})
export class CasesByCountryComponent implements OnInit {

  public countries: Country[] = [];

  constructor(public mainPageService:MainPageService) { }

  ngOnInit(): void {
    this.mainPageService.getWorldwideData().subscribe((data)=>{

      for (var index in data.Countries){
        this.countries.push(new Country(
          data.Countries[index].ID,
          data.Countries[index].Country,
          data.Countries[index].Slug,
          data.Countries[index].NewConfirmed,
          data.Countries[index].TotalConfirmed,
          data.Countries[index].NewDeaths,
          data.Countries[index].TotalDeaths,
          data.Countries[index].NewRecovered,
          data.Countries[index].TotalRecovered,
          data.Countries[index].Date
        ));
      }

      console.log(this.countries);
    })
  }

}
