import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Banco } from '../models/banco';
import { Observable, throwError } from 'rxjs';
import 'rxjs/add/operator/catch';


const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})


export class BancosService {

  API_URL = 'http://127.0.0.1:8000/api';
  token = localStorage.getItem('ApiToken');
  constructor(private http: HttpClient) { }


  getBancos(): Observable<Banco[]> {
    return this.http.get<Banco[]>(`${this.API_URL}/bank?token=${this.token}`)
    .catch(error => {
      swal('error al Otener Usuarios', JSON.stringify(error) , 'error');
      return throwError(error);
    });
  }

  registrar(banco: Banco): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/bank?token=${this.token}`, banco, httpOptions)
    .catch(error => {
      return throwError(error);
    });
  }

  editar(banco: Banco): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/bank/${banco.id}?token=${this.token}`, banco, httpOptions)
    .catch(error => {
      return throwError(error);
    });
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/bank/${id}?token=${this.token}`, httpOptions)
    .catch(error => {
      return throwError(error);
    });
  }

}
