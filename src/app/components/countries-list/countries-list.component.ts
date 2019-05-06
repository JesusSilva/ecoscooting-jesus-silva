import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CountryService } from '../../services/country.service';
import { Country } from './../../classes/countries';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'alpha3code', 'capital', 'region', 'bandera'];
  dataSource: MatTableDataSource<Country>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private countryService: CountryService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.retriveCountriesList();
  }

  retriveCountriesList() {
    this.countryService.getCountriesList()
    .subscribe(
      response => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => console.log(error)
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  navigateToDetails(alpha3Code) {
    this.router.navigate(['/detail/' + alpha3Code]);
  }
}
