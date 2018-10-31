import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HoroscopoComponent } from './horoscopo/horoscopo.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { LoginComponent } from './login/login.component';


const ROUTES: Routes = [
  {
    path: '',
    component: MenuInicioComponent,
    children: [
      { path: 'inicio', component: InicioComponent } ,
      { path: 'quien soy', component: QuienSoyComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: 'horoscopos', component: HoroscopoComponent },
      { path: 'registrarse', component: RegistrarseComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: '/inicio', pathMatch: 'full'},
    ],
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
