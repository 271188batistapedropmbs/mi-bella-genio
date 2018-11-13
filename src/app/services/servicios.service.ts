import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Servicio } from '../models/servicio';
import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';


const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }

  API_URL = 'http://127.0.0.1:8000/api';
  token = localStorage.getItem('ApiToken');

  getServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(`${this.API_URL}/service?token=${this.token}`);
  }

  registrarServicio(servicio: Servicio): Observable<Servicio> {
    return this.http.post<Servicio>(`${this.API_URL}/service?token=${this.token}`, servicio, httpOptions)
    .catch(error => {
      return throwError(error);
    });
  }

  editarServicio(servicio: Servicio): Observable<Servicio> {
    return this.http.put<Servicio>(`${this.API_URL}/service/${servicio.id}?token=${this.token}`, servicio, httpOptions)
    .catch(error => {
      return throwError(error);
    });
  }

  eliminarServicio(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API_URL}/service/${id}?token=${this.token}`, httpOptions)
    .catch(error => {
      return throwError(error);
    });
  }
}
