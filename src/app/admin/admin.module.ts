import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import {AdminRoutingModule} from './/admin-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


import { MaterialModule } from '../material.module';

/*componeryes */
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { AdminComponent } from './/admin.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ContactoAdminComponent } from './contacto-admin/contacto-admin.component';
import { BancosComponent } from './bancos/bancos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ModalAdminComponent } from './modal-admin/modal-admin.component';
import { FormServiciosComponent } from './servicios/form-servicio/form-servicio.component';
import { FormBancosComponent } from './bancos/form-bancos/form-bancos.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { FormContactoComponent } from './contacto-admin/form-contacto/form-contacto.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AdminComponent,
    MenuAdminComponent,
    UsuariosComponent,
    ContactoAdminComponent,
    BancosComponent,
    ServiciosComponent,
    ModalAdminComponent,
    FormServiciosComponent,
    FormBancosComponent,
    TransferenciasComponent,
    ConsultasComponent,
    FormContactoComponent,
  ],
  entryComponents: [
    ModalAdminComponent,
    FormServiciosComponent,
    FormBancosComponent,
   ]
})
export class AdminModule { }
