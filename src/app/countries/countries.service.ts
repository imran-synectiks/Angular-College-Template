import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Country} from '../models/user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CountriesService {

  constructor(private http: HttpClient) {}

  private countriesUrl = 'http://localhost:3001/marks';

  public getCountries() {
    return this.http.get<Country[]>(this.countriesUrl);
  }

  public deleteCountry(country) {
    return this.http.delete(this.countriesUrl + '/' + country.id);
  }

  public createCountry(country) {
    return this.http.post<Country>(this.countriesUrl, country);
  }
  public editCountry(country) {
    return this.http.put<Country>(this.countriesUrl, country);
  }
}
