import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../models/city';


@Injectable({
  providedIn: 'root',
})
export class CityService {

  // apiLinks : APIUSettings  = new APIUSettings();
  // private apiUrl = this.apiLinks.APIURL +'cities';

  public apiUrl="http://localhost:5148/api/Cities";
  constructor(private http: HttpClient) {}

  // Get all cities
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(`${this.apiUrl}`);
  }

  // Get city by ID
  getCityById(id: number): Observable<City> {
    return this.http.get<City>(`${this.apiUrl}/cities/${id}`);
  }

  // Add a new city
  // addCity(city: City): Observable<City> {
  //   return this.http.post<City>(`${this.apiUrl}`, city);
  // }
addCity(data:City){
  return this.http.post(this.apiUrl,data);
}
  // Update existing city
  updateCity(city: City): Observable<City> {
    return this.http.put<City>(`${this.apiUrl}/cities/${city.id}`, city);
  }

  // Delete a city by ID
  deleteCity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/cities/${id}`);
  }
}
