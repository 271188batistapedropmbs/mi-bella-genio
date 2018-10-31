import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';

import {ReactiveFormsModule} from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';

/*material modulo */
import { MaterialModule } from '../material.module';

import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { HoroscopoComponent } from './horoscopo/horoscopo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    PagesRoutingModule,
  ],
  declarations: [
    MenuInicioComponent,
    InicioComponent,
    QuienSoyComponent,
    HoroscopoComponent,
    ContactoComponent,
    LoginComponent,
    RegistrarseComponent,
  ],
})
export class PagesModule { }
