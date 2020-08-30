import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  httpOptions = {};
  Url = '';
  constructor(private http: HttpClient) {
    this.Url = 'https://localhost:44301/api/Dogs/';
    this.httpOptions = {
      headers: new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
      }
    )};
  }
  GetAllDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(`${this.Url}GetAllDogs`, this.httpOptions);
  }

  deleteDog(id: number): Observable<boolean> {
    return this.http.post<boolean>(`${this.Url}DeleteDog/${id}`, this.httpOptions);
  }

  addDog(dog: Dog): Observable<boolean> {
    return this.http.post<boolean>(`${this.Url}AddDog`, dog);
  }

  getDogById(id: number): Observable<Dog> {
    return this.http.get<Dog>(`${this.Url}GetDog/${id}`, this.httpOptions);
  }

  editDog(dog: Dog): Observable<boolean> {
    return this.http.post<boolean>(`${this.Url}UpdateDog/${parseInt(dog.id)}`, dog);
  }
}
