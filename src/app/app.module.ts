import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { SummaryWorldwideComponent } from './summary-worldwide/summary-worldwide.component';
import { CasesDistributionWorldwideComponent } from './cases-distribution-worldwide/cases-distribution-worldwide.component';
import { DailyCasesWorldwideComponent } from './daily-cases-worldwide/daily-cases-worldwide.component';
import { TotalCasesWorldwideComponent } from './total-cases-worldwide/total-cases-worldwide.component';
import { CasesByCountryComponent } from './cases-by-country/cases-by-country.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { MainPageService } from './services/main-page.service';
import { ChartsModule } from 'ng2-charts';
import { SortDirective } from './directives/sort.directive';
import { CountryComponent } from './country/country.component';
import { CasesDistributionCountryComponent } from './cases-distribution-country/cases-distribution-country.component';
import { DailyCasesCountryComponent } from './daily-cases-country/daily-cases-country.component';
import { TotalCasesCountryComponent } from './total-cases-country/total-cases-country.component';
import { AuthService } from './services/auth.service';
import { AddNewsComponent } from './add-news/add-news.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SummaryWorldwideComponent,
    CasesDistributionWorldwideComponent,
    DailyCasesWorldwideComponent,
    TotalCasesWorldwideComponent,
    CasesByCountryComponent,
    MainComponentComponent,
    SortDirective,
    CountryComponent,
    CasesDistributionCountryComponent,
    DailyCasesCountryComponent,
    TotalCasesCountryComponent,
    AddNewsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MainPageService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
