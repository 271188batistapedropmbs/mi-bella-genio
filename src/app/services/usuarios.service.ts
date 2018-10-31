import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';
import swal from 'sweetalert';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URL = 'http://127.0.0.1:8000/api';
  token = localStorage.getItem('ApiToken');

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.API_URL}/usuarios?token=${this.token}`)
    .catch(error => {
      swal('error al Otener Usuarios', JSON.stringify(error) , 'error');
      return Observable.throw(error);
    });
  }
}
