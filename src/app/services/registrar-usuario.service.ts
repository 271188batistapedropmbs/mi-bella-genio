import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../models/usuario';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';
import swal from 'sweetalert';


const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuarioService {

  API_URL = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  registrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API_URL}/registrarse`, usuario, httpOptions)
        .catch(error => {
          swal('error al registrarse', JSON.stringify(error) , 'error');
          return Observable.throw(error);
        });

  }

  getUserByEmail(correo: string): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/comprobar`, {correo: correo}, httpOptions)
    .catch(error => {
      swal('error al registrarse', JSON.stringify(error) , 'error');
      return Observable.throw(error);
    });
  }
}
