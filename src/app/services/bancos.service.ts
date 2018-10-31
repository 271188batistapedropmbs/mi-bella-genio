import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banco } from '../models/banco';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';

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
      return Observable.throw(error);
    });
  }
}
