import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private httpClient:HttpClient) { }

  public getWorldwideData(){
    return this.httpClient.get<any>("https://api.covid19api.com/summary");
  }

  public getDailyCases(nbOfDays : any){
    let string = "https://corona.lmao.ninja/v2/historical/all?lastdays=" + nbOfDays;
    return this.httpClient.get<any>(string);
  }

  public getListOfCountries(){
    return this.httpClient.get<any>("https://api.covid19api.com/countries")
  }
}
