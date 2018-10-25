import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(public router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if ( localStorage.getItem('ApiUSer') &&  localStorage.getItem('ApiToken') ) {

        const usuarios = JSON.parse(localStorage.get('ApiUser'));
        if (usuarios.tipo === 'isUser') {
          return true;
        } else {
          this.router.navigate(['/login']);
        }
      }
  }
}
