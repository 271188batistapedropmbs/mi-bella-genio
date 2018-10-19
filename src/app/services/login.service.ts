import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }


  login(email, password): Observable<any> {

    return this.http.post<any>(`${this.API_URL}/login`, { email, password }, httpOptions);

  }

  logout(): void {
    localStorage.clear();
  }

}
