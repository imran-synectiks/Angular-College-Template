import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CountriesService} from './countries.service';
import {Country} from '../models/user.model';

@Component({
  selector: 'app-add-countries',
  templateUrl: './add-countries.component.html',
  styleUrls: ['./add-countries.component.css']
})
export class AddCountriesComponent implements OnInit {

  country: Country = new Country();

  constructor(private router: Router, private countryService: CountriesService) {

  }

  createCountry(): void {
    this.countryService.createCountry(this.country)
      .subscribe(data => {
        console.log('Country created successfully.');
      });

  }

  ngOnInit() {

  }
}
