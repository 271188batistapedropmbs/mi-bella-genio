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

import { Error404Component } from './error404/error404.component';

/*interceptores
import { JwtInterceptor } from './interceptors/jwt.interceptor';
*/


@NgModule({
  declarations: [
    AppComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
