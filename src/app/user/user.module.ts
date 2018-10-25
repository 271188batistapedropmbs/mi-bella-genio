import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {UserRoutingModule} from './/user-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule,
  ],
  declarations: []
})
export class UserModule { }
