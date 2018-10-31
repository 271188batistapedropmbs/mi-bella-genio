import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { UserGuard } from '../guards/user.guard';

const routes: Routes = [
  {
    path: 'user',
    component: MenuUserComponent,
    canActivate: [UserGuard],
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class UserRoutingModule { }
