import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Contacto } from '../models/contacto';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';




const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

API_URL = 'http://127.0.0.1:8000/api';
token = localStorage.getItem('ApiToken');

  constructor(private _http: HttpClient ) { }

  getContactos(): Observable<Contacto[]> {

    return this._http.get<Contacto[]>(`${this.API_URL}/contactos?token=${this.token}`)
    .catch(error => {
      if (error.status === 401) {
        swal('Error al Obtener Contacto', 'Usuario no Autorizado', 'error');
      }
      return Observable.throw(error);
    });

  }

  crearContacto(contacto: Contacto): Observable<Contacto> {

    return this._http.post<Contacto>(`${this.API_URL}/contactos`, contacto, httpOptions);
  }

}
