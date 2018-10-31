import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {UserRoutingModule} from './/user-routing.module';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { MaterialModule } from '../material.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UserRoutingModule,
    MaterialModule
  ],
  declarations: [MenuUserComponent]
})
export class UserModule { }
