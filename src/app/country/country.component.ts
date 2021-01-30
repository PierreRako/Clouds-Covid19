import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ASingleNews } from '../a-single-news';
import { Country } from '../country';
import { CountryPageService } from '../services/country-page.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  public newsArray: ASingleNews[];

  public slug: string;

  public country: Country;

  activeCases: number;
  recoveryRate: number;
  mortalityRate: number;

  constructor(private route: ActivatedRoute,
              private countryPageService: CountryPageService,
              private newsService:NewsService) { }

  async ngOnInit(): Promise<void> {
    this.slug = this.route.snapshot.params['name'];
    this.countryPageService.getCountrySummary(this.slug)
    this.country = await this.countryPageService.getCountrySummary(this.slug);

    this.activeCases = this.country.totalCases - this.country.totalDeaths - this.country.totalRecovered;
    this.recoveryRate = (this.country.totalRecovered/this.country.totalCases)*100;
    this.mortalityRate = (this.country.totalDeaths/this.country.totalCases)*100;

    this.newsService.getNews().subscribe((news)=>{
      let country_news = []
      for(let i=0; i<news.length; i++){
        var new_i = news[i] as ASingleNews;
        if(new_i.slug == this.slug){
          country_news.push(new_i);
        }
      }
      this.newsArray = country_news;
    });
  }

}
