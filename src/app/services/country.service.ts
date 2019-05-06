import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../classes/constants';
import { Country } from '../classes/countries';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) {}

  getCountriesList(): Observable < Country[] > {
    const url = Constants.COUNTRIES_LIST;
    return this.httpClient.get < Country[] > (url);
  }

  getCountryDetails(code: string): Observable < Country > {
    const url = `${Constants.COUNTRY_DETAILS.replace('{alphaCode}', code)}`;
    return this.httpClient.get < Country > (url);
  }

}
