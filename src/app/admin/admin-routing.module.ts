import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { AdminComponent } from './admin.component';
import { AdminGuard } from '../guards/admin.guard';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ContactoAdminComponent } from './contacto-admin/contacto-admin.component';
import { BancosComponent } from './bancos/bancos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { ConsultasComponent } from './consultas/consultas.component';


const routes: Routes = [
  {
    path: 'admin',
    component: MenuAdminComponent,
    canActivate: [AdminGuard],
    children: [
      { path: 'adminicio', component: AdminComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'contactos', component: ContactoAdminComponent },
      { path: 'bancos', component: BancosComponent},
      { path: 'servicios', component: ServiciosComponent},
      { path: 'transferencias', component: TransferenciasComponent},
      { path: 'consultas', component: ConsultasComponent}
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AdminRoutingModule { }
