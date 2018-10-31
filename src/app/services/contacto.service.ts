import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Contacto } from '../models/contacto';
import { Observable } from 'rxjs';




const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

API_URL = 'http://127.0.0.1:8000/api';

  constructor(private _http: HttpClient ) { }

  getContactos(): Observable<Contacto[]> {

    return this._http.get<Contacto[]>(`${this.API_URL}/contactos`);

  }

  crearContacto(contacto: Contacto): Observable<Contacto> {

    return this._http.post<Contacto>(`${this.API_URL}/contactos`, contacto, httpOptions);
  }

}
