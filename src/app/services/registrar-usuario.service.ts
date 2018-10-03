import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';


const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class RegistrarUsuarioService {

  API_URL = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  registrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API_URL}/registrarse`, usuario, httpOptions);

  }
}
