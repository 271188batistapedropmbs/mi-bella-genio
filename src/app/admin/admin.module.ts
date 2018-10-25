import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import {AdminRoutingModule} from './/admin-routing.module';

/*componeryes */
import { AdminComponent } from './/admin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminComponent,
  ]
})
export class AdminModule { }
