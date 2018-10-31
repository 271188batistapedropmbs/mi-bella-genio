import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import { MatTableDataSource } from '@angular/material';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-contacto-admin',
  templateUrl: './contacto-admin.component.html',
  styleUrls: ['./contacto-admin.component.css']
})
export class ContactoAdminComponent implements OnInit, OnDestroy {

 // contactos: Contacto[] = [];
  displayedColumns: string[] = ['#', 'nombre', 'correo', 'asunto', 'mensaje', 'responder'];
  subscription: Subscription;
  dataSource: any;

  constructor(private _servContacto: ContactoService) { }

  ngOnInit() {

   this.subscription = this._servContacto.getContactos().subscribe( (resp: any) => {
      // this.contactos = resp.contactos;
      this.dataSource = new MatTableDataSource(resp.contactos);
     console.log(resp);
   });
  }

  filtrar(filtro): void {
    this.dataSource.filter = filtro.trim().toLocaleLowerCase();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
