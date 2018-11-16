import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../models/usuario';
import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';
import swal from 'sweetalert';


const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuarioService {

  API_URL = 'http://127.0.0.1:8000/api';
  err: string[] = [];

  constructor(private http: HttpClient) { }

  registrar(usuario: Usuario): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/registrarse`, usuario, httpOptions)
        .catch(error => {

          if (error.status === 0) {
            swal('error servidor caido', JSON.stringify(error) , 'error');
          }

          if (error.status === 422 ) {

            for (const key in error.error.errors) {
              if (error.error.errors.hasOwnProperty(key)) {
                for (let index = 0; index < error.error.errors[key].length; index++) {
                  const dterr = error.error.errors[key][index];
                  this.err.push(dterr);
                }
              }
            }
            console.log(JSON.stringify(this.err));
            swal('error de validaciones', this.err.toString().replace(/,/gi, '. \n'), 'error');
            this.err = [];
          }
          return throwError(error);
        });

  }

  getUserByEmail(correo: string): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/comprobar`, {correo}, httpOptions)
    .catch(error => {
      swal('error al registrarse', JSON.stringify(error) , 'error');
      return throwError(error);
    });
  }
}
