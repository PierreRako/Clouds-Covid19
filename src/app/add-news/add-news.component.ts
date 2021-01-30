import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MainPageService } from '../services/main-page.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  description:string;
  date:any;
  slug:string;

  countries:{ Country:string, Slug:string, ISO2:string}[];

  constructor(public authService: AuthService,
    private mainPageService:MainPageService,
    private newsService: NewsService) { }

  ngOnInit(): void {
    this.mainPageService.getListOfCountries().subscribe((data)=>{
      this.countries = data.sort((a, b) => (a.Country > b.Country) ? 1 : -1);
    })
  }

  addNew(){
    var user=this.authService.getUser();

    this.newsService.addNews(user,this.description,this.date,this.slug);
    this.date = undefined;
    this.description = undefined;
    this.slug = undefined;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    var user=this.authService.getUser();

    this.newsService.addNews(user,form.value["descriptionInput"],form.value["dateInput"],form.value["slugInput"]);
    form.reset();
  }
}
