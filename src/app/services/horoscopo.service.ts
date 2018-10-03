import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  horoscopoUrl = 'https://api.cadcc.cl/tyaas/';

  constructor(private _http: HttpClient) { }

  getHoroscopo() {
    return this._http.get(this.horoscopoUrl);
  }
}
