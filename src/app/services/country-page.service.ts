import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Country } from '../country';
import { MainPageService } from './main-page.service';

@Injectable({
  providedIn: 'root'
})
export class CountryPageService {
  country: Country;

  constructor(private httpClient: HttpClient,
              private firestore:AngularFirestore,
              private mainPageService:MainPageService) { }

  public getCountryAPICall(slug:string){ 
    let string = "https://api.covid19api.com/total/country/" + slug;
    return this.httpClient.get<any>(string);
  }

  // This method implements the challenge 1
  public async getCountrySummary(slug:string){

    const doc = await this.firestore.collection("countries").doc(slug).get().toPromise();
    var country:Country;
    if (!(doc.exists)){
      const data = await this.mainPageService.getWorldwideData().toPromise();
      const theRightCountry = data.Countries.find(e => (e.Slug === slug));

      //build the country object of the service
      country = new Country(
        theRightCountry.ID,
        theRightCountry.Country,
        slug,
        theRightCountry.NewConfirmed,
        theRightCountry.TotalConfirmed,
        theRightCountry.NewDeaths,
        theRightCountry.TotalDeaths,
        theRightCountry.NewRecovered,
        theRightCountry.TotalRecovered,
        theRightCountry.Date);
      
      //update the country data in firestore
      this.updateCountryData(country);
    }

    else {
      var upToDate:boolean;
      const today = new Date();
      const docObject = doc.data()
      upToDate = ( (new Date(docObject["date"])).toDateString() === today.toDateString() );
      console.log(today.toDateString());
      console.log((new Date(docObject["date"])).toDateString());

      if (!upToDate) {  
        //fetch API Data
        const data = await this.mainPageService.getWorldwideData().toPromise();
        const theRightCountry = data.Countries.find(e => (e.Slug === slug));

        //build the country object of the service
        country = new Country(
          theRightCountry.ID,
          theRightCountry.Country,
          slug,
          theRightCountry.NewConfirmed,
          theRightCountry.TotalConfirmed,
          theRightCountry.NewDeaths,
          theRightCountry.TotalDeaths,
          theRightCountry.NewRecovered,
          theRightCountry.TotalRecovered,
          theRightCountry.Date);
        
        //update the country data in firestore
        this.updateCountryData(country);
      }

      else {
        country = new Country(
          docObject["id"],
          docObject["name"],
          docObject["slug"],
          docObject["newCases"],
          docObject["totalCases"],
          docObject["newDeaths"],
          docObject["totalDeaths"],
          docObject["newRecovered"],
          docObject["totalRecovered"],
          docObject["date"]
        );
      }
    }
    return country
  }

  public getCountryFromService(){
    return this.country
  }

  private updateCountryData(country: Country){
    
    this.firestore.collection("countries").doc(country.slug).set({
      id: country.id,
      name: country.name,
      slug: country.slug,
      totalCases: country.totalCases,
      newCases: country.newCases,
      totalDeaths: country.totalDeaths,
      newDeaths: country.newDeaths,
      totalRecovered: country.totalRecovered,
      newRecovered: country.newRecovered,
      date: country.date
    },{ merge: true});
  }
}
