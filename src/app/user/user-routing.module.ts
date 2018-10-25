import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '../error404/error404.component';

const routes: Routes = [
  {path: '', redirectTo: '/user', pathMatch: 'full'},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  declarations: []
})
export class UserRoutingModule { }
