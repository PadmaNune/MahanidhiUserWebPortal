import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Badge } from '../models/badge';


@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  // apiLinks : APIUSettings  = new APIUSettings();
  // private apiUrl = this.apiLinks.APIURL +'badges';
  public apiUrl="http://localhost:5148/api/Badges";
  
  
  constructor(private http: HttpClient) {}

  getBadges(): Observable<Badge[]> {
    return this.http.get<Badge[]>(this.apiUrl);
  }

  getBadge(id: number): Observable<Badge> {
    return this.http.get<Badge>(`${this.apiUrl}/${id}`);
  }

  addBadge(badge: Badge): Observable<Badge> {
    return this.http.post<Badge>(this.apiUrl, badge);
  }

  updateBadge(badge: Badge): Observable<Badge> {
    return this.http.put<Badge>(`${this.apiUrl}/${badge.Id}`, badge);
  }

  deleteBadge(id: number): Observable<Badge> {
    return this.http.delete<Badge>(`${this.apiUrl}/${id}`);
  }
}
