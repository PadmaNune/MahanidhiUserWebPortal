// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CountryService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country';


@Injectable({
  providedIn: 'root',
})
export class CountryService {

  // apiLinks : APIUSettings  = new APIUSettings();
  // private apiUrl = this.apiLinks.APIURL +'country';

  public apiUrl="http://localhost:5148/api/Country";
  constructor(private http: HttpClient) {}

  // Get all country
  getcountry(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}`);
  }

  // Get Country by ID
  getCountryById(id: number): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}/country/${id}`);
  }

  // Add a new Country
  // addCountry(Country: Country): Observable<Country> {
  //   return this.http.post<Country>(`${this.apiUrl}`, Country);
  // }
addCountry(data:Country){
  return this.http.post(this.apiUrl,data);
}
  // Update existing Country
  updateCountry(Country: Country): Observable<Country> {
    return this.http.put<Country>(`${this.apiUrl}/country/${Country.id}`, Country);
  }

  // Delete a Country by ID
  deleteCountry(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/country/${id}`);
  }
}

