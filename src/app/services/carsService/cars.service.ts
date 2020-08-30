import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  httpOptions = {};
  Url = '';
  constructor(private http: HttpClient) {
    this.Url = 'https://localhost:44301/api/Cars/';
    this.httpOptions = {
      headers: new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE'
      }
    )};
  }
  GetAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.Url}GetAllCars`, this.httpOptions);
  }

  deleteCar(id: number): Observable<boolean> {
    return this.http.post<boolean>(`${this.Url}DeleteCar/${id}`, this.httpOptions);
  }

  addCar(car: Car): Observable<boolean> {
    return this.http.post<boolean>(`${this.Url}AddCar`, car);
  }

  getCarById(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.Url}GetCar/${id}`, this.httpOptions);
  }

  editCar(car: Car): Observable<boolean> {
    return this.http.post<boolean>(`${this.Url}UpdateCar/${parseInt(car.id)}`, car);
  }

}

//Delete and Put for update and delete object 
