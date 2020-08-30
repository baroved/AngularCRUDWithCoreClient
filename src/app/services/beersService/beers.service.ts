import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  httpOptions = {};
  Url = '';
  constructor(private http: HttpClient) {
    this.Url = 'https://localhost:44301/api/Beers/';
    this.httpOptions = {
      headers: new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
      }
    )};
  }
  GetAllBeers(): Observable<Beer[]> {
    return this.http.get<Beer[]>(`${this.Url}GetAllBeers`, this.httpOptions);
  }

  deleteBeer(id: number): Observable<boolean> {
    return this.http.post<boolean>(`${this.Url}DeleteBeer/${id}`, this.httpOptions);
  }

  addBeer(beer: Beer): Observable<boolean> {
    return this.http.post<boolean>(`${this.Url}AddBeer`, beer);
  }

  getBeerById(id: number): Observable<Beer> {
    return this.http.get<Beer>(`${this.Url}GetBeer/${id}`, this.httpOptions);
  }

  editBeer(beer: Beer): Observable<boolean> {
    return this.http.post<boolean>(`${this.Url}UpdateBeer/${parseInt(beer.id)}`, beer);
  }
}
