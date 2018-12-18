import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import { MatTableDataSource, MatSort, MatPaginator,  MatDialog, MatDialogConfig} from '@angular/material';
import {Subscription} from 'rxjs';
import { ModalAdminComponent } from '../modal-admin/modal-admin.component';
import { Contacto } from 'src/app/models/contacto';


@Component({
  selector: 'app-contacto-admin',
  templateUrl: './contacto-admin.component.html',
  styleUrls: ['./contacto-admin.component.css']
})
export class ContactoAdminComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  contactos: Contacto[] = [];
  displayedColumns: string[] = ['#', 'nombre', 'correo', 'asunto', 'created_at', 'mensaje', 'responder'];
  subscription: Subscription;
  dataSource: any;

  constructor(private _servContacto: ContactoService, public modal: MatDialog) { }

  ngOnInit() {

   this.subscription = this._servContacto.getContactos().subscribe( (resp: any) => {
      this.contactos = resp.contactos;
      this.dataSource = new MatTableDataSource(this.contactos);
      // ordenan dato de la table
      this.dataSource.sort = this.sort;
      // paginaction de la tabla
      this.dataSource.paginator = this.paginator;
   });
  }
    // filttando los datos de busqueda
  filtrar(filtro): void {
    this.dataSource.filter = filtro.trim().toLocaleLowerCase();
  }

  verMensaje(mensaje: string): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.width = '600px';
    dialogConfig.height = 'auto';

    dialogConfig.data = {
        title: 'Mensaje de Contactos',
        mesage: mensaje,
    };

 const dialogRef = this.modal.open(ModalAdminComponent, dialogConfig);

 dialogRef.afterClosed().subscribe(result => {
  console.log(`Dialog result: ${result}`);
 });
  }

  responderMensaje(id: number): void {
    console.log(id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

