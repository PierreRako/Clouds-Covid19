import { Component, OnInit } from '@angular/core';
import { ASingleNews } from '../a-single-news';
import { MainPageService } from '../services/main-page.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  public newsArray: ASingleNews[];

  constructor(public mainPageService: MainPageService,
    private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((news)=>{
      let country_news = []
      for(let i=0; i<news.length; i++){
        var new_i = news[i] as ASingleNews;
        if(new_i.slug == "Worldwide"){
          country_news.push(new_i);
        }
      }
      this.newsArray = country_news;
    });
  }

}
