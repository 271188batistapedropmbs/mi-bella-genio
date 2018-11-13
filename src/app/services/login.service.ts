import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { throwError } from 'rxjs';
import swal from 'sweetalert';



const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }


  login(email, password): Observable<any> {

    return this.http.post<any>(`${this.API_URL}/login`, { email, password }, httpOptions)
    .catch(error => {
      if (error.status === 401) {
        swal('Error Al Entrar Al Sistema', 'Correo o Clave invalido', 'error');
      }
      return throwError(error);
    });

  }

  logout(): void {
    localStorage.clear();
  }

}
