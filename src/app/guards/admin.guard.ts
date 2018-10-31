import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor( public router: Router ) { }
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if ( localStorage.getItem('ApiUser') && localStorage.getItem('ApiToken') ) {

      const usuario = JSON.parse(localStorage.getItem('ApiUser'));
      if (usuario.tipo === 'isAdmin') {
        return true;
      }
    }
    this.router.navigate(['/login']);
  }
}
