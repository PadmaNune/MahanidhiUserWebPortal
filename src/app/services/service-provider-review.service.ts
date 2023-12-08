// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ServiceProviderReviewService {

//   constructor() { }

// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SPReview } from '../models/Serviceproviderreviews';


@Injectable({
  providedIn: 'root',
})
export class SPReviewService {

  // apiLinks : APIUSettings  = new APIUSettings();
  // private apiUrl = this.apiLinks.APIURL +'SPReview';

  public apiUrl = "http://localhost:5148/api/Serviceproviderreviews";
  constructor(private http: HttpClient) { }

  // Get all SPReview
  getSPReview(): Observable<SPReview[]> {
    return this.http.get<SPReview[]>(`${this.apiUrl}`);
  }

  // Get SPReview by ID
  getSPReviewById(id: number): Observable<SPReview> {
    return this.http.get<SPReview>(`${this.apiUrl}/SPReview/${id}`);
  }

  // Add a new SPReview
  // addSPReview(SPReview: SPReview): Observable<SPReview> {
  //   return this.http.post<SPReview>(`${this.apiUrl}`, SPReview);
  // }
  addSPReview(data: SPReview) {
    return this.http.post(this.apiUrl, data);
  }
  // Update existing SPReview
  updateSPReiew(SPReview: SPReview): Observable<SPReview> {
    return this.http.put<SPReview>(`${this.apiUrl}/SPReiew/${SPReview.id}`, SPReview);
  }

  // Delete a SPReiew by ID
  deleteSPReview(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/SPReview/${id}`);
  }
}
