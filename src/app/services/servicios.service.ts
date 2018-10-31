import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Servicio } from '../models/servicio';

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
}
