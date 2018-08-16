import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Country} from '../models/user.model';
import {CountriesService} from './countries.service';

@Component({
  selector: 'app-counties',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  country: Country = new Country();
  countries: Country[];

  selectedCountry = 0;
  selectedState = 0;

  title = 'app';
  states = [];
  cities = [];

  onSelectCountry(country_id: number) {
    this.selectedCountry = country_id;
    this.selectedState = 0;
    this.cities = [];
    this.states = this.getStates().filter((item) => {
      return item.country_id === Number(country_id);
    });
  }

  onSelectSections(section_id: number) {
    this.selectedCountry = section_id;
    this.selectedState = 0;
    this.cities = [];
    this.states = this.getStates().filter((item) => {
      return item.country_id === Number(section_id);
    });
  }

  onSelectState(state_id: number) {
    this.selectedState = state_id;
    this.cities = this.getCity().filter((item) => {
      return item.state_id === Number(state_id);
    });
  }

  getCountries() {
    return [
      {id: 1, name: 'Maths'},
      {id: 2, name: 'Electronics'},
      {id: 3, name: 'Computer Science'}
    ];
  }

  getSections() {
    return [
      {id: 1, name: 'A'},
      {id: 2, name: 'B'},
      {id: 3, name: 'C'},
      {id: 4, name: 'D'},
      {id: 5, name: 'E'},
      {id: 6, name: 'F'}
    ];
  }

  getStates() {
    return [
      {id: 1, country_id: 1, name: 'Algorithm'},
      {id: 2, country_id: 1, name: 'Maths'},
      {id: 3, country_id: 2, name: 'MEFA'},
      {id: 4, country_id: 2, name: 'Statics'},
      {id: 5, country_id: 3, name: 'Physics'},
      {id: 6, country_id: 3, name: 'Chemistry'},
    ];
  }

  getCity() {
    return [
      {id: 1, state_id: 1, name: 'Class Test'},
      {id: 2, state_id: 1, name: 'Mid Test'},
      {id: 3, state_id: 1, name: 'Model Test'},
      {id: 4, state_id: 1, name: 'First Test'},
      {id: 5, state_id: 2, name: 'Final Test'}
    ];
  }

  constructor(private router: Router, private countriesService: CountriesService) {
  }

  ngOnInit() {

    this.countriesService.getCountries()
      .subscribe(data => {
        this.countries = data;
      });
  }

  deleteCountry(country: Country): void {
    this.countriesService.deleteCountry(country)
      .subscribe(data => {
        this.countries = this.countries.filter(k => k !== country);
      });
  }

  createCountry(): void {
    this.countriesService.createCountry(this.country)
      .subscribe(data => {
        console.log('Country created successfully.');
      });

  }
}
