import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Country } from '../../classes/countries';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  country: Country = new Country();
  alpha3Code: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private countryService: CountryService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.retrieveCountryDetails(params);
    });
  }

  retrieveCountryDetails(params) {
    this.alpha3Code = params.get('alpha3Code');
    this.countryService.getCountryDetails(this.alpha3Code).subscribe(response => {
      this.country = response;
    });
  }

  goBack() {
    this.router.navigate(['']);
  }

}
