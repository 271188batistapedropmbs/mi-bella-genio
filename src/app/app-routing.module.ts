import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { LoginComponent } from './login/login.component';
import { HoroscopoComponent } from './horoscopo/horoscopo.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent } ,
  { path: 'quien soy', component: QuienSoyComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'horoscopos', component: HoroscopoComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( routes, { useHash: true }),
  ],
})
export class AppRoutingModule { }
