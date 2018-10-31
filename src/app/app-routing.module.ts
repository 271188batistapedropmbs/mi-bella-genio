import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './error404/error404.component';


const ROUTES: Routes = [
  { path: '', loadChildren: '../app/pages/pages.module#PagesModule'},
  { path: '', loadChildren: '../app/admin/admin.module#AdminModule' },
  { path: '', loadChildren: '../app/user/user.module#UserModule' },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot( ROUTES, { useHash: true }),
  ],
})
export class AppRoutingModule { }
