import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

const routes: Routes = [
  {
    path: '',
    component: CountriesListComponent,
    children: [
      {
        path: 'detail/:id',
        component: CountryDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
