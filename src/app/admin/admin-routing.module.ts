import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { AdminComponent } from './/admin.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: []
})
export class AdminRoutingModule { }
