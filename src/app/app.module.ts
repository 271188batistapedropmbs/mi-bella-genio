import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

/*componentes por ahora lo dejaremos */
import { AppRoutingModule } from './/app-routing.module';
// import { PagesRoutingModule } from './pages/pages-routing.module';
// import { HoroscopoComponent } from './horoscopo/horoscopo.component';
import { Error404Component } from './error404/error404.component';

/*interceptores
import { JwtInterceptor } from './interceptors/jwt.interceptor';
*/
/*modulo de material angular*/
// import { MaterialModule } from './material.module';

/*modulos admin, user, pages*/
// import { PagesModule } from './pages/pages.module';
// import { AdminModule } from './admin/admin.module';
// import { UserModule } from './user/user.module';




@NgModule({
  declarations: [
    AppComponent,
  //  HoroscopoComponent,
    Error404Component,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
 //   MaterialModule,
 //   PagesModule,
 //   PagesRoutingModule,
 //   UserModule,
 //   AdminModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
