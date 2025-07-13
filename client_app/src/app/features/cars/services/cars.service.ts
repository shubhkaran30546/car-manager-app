import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  getCar(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }

  createCar(data: Partial<Car>): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, data);
  }

  updateCar(id: number, data: Partial<Car>): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/${id}`, data);
  }

  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
