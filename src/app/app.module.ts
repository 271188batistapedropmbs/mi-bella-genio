import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

/*componentes por ahora lo dejaremos */
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { HoroscopoComponent } from './horoscopo/horoscopo.component';
import { Error404Component } from './error404/error404.component';
import { AppRoutingModule } from './/app-routing.module';

/*interceptores
import { JwtInterceptor } from './interceptors/jwt.interceptor';
*/
/*modulo de material angular*/
import { MaterialModule } from './material.module';

/*modulos admin y user*/
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';




@NgModule({
  declarations: [
    AppComponent,
    MenuInicioComponent,
    InicioComponent,
    QuienSoyComponent,
    ContactoComponent,
    LoginComponent,
    RegistrarseComponent,
    HoroscopoComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    UserModule,
    AdminModule,
  ],
  providers: [
    /*{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
