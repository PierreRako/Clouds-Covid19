import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { MainComponentComponent } from './main-component/main-component.component';

const routes: Routes = [
  { path: "world", component: MainComponentComponent},
  { path: "country/:name", component: CountryComponent},
  { path: "", pathMatch: "full", redirectTo: "world" },
  { path: "**", redirectTo: "world" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
