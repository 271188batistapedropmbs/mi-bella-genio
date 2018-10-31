import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import {AdminRoutingModule} from './/admin-routing.module';


import { MaterialModule } from '../material.module';

/*componeryes */
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { AdminComponent } from './/admin.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ContactoAdminComponent } from './contacto-admin/contacto-admin.component';
import { BancosComponent } from './bancos/bancos.component';
import { ServiciosComponent } from './servicios/servicios.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    MaterialModule,
  ],
  declarations: [
    AdminComponent,
    MenuAdminComponent,
    UsuariosComponent,
    ContactoAdminComponent,
    BancosComponent,
    ServiciosComponent,
  ]
})
export class AdminModule { }
