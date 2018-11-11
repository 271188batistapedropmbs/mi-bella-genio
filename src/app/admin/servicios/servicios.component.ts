import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import {Subscription} from 'rxjs';
import { Servicio } from 'src/app/models/servicio';
import { FormServiciosComponent } from './form-servicio/form-servicio.component';


@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  subscription: Subscription;
  dataSource: any;
  displayedColumns: string[] = ['#', 'nombre', 'estado', 'creado', 'actualizado', 'accion'];

  constructor(private serv: ServiciosService, public modal: MatDialog) { }

  ngOnInit() {
   this.subscription = this.serv.getServicios().subscribe((resp: any) => {
      this.dataSource = new MatTableDataSource(resp.servicios);
      // ordenan dato de la table
      this.dataSource.sort = this.sort;
      // paginaction de la tabla
      this.dataSource.paginator = this.paginator;
    });
  }

  filtrar(filtro): void {
    this.dataSource.filter = filtro.trim().toLocaleLowerCase();
  }

  openDialogoForm() {
    const config = new MatDialogConfig();
    config.height = 'auto';
    config.width = '60%';
    this.modal.open(FormServiciosComponent, config);
  }

  eliminar(id) {
    console.log(id);
  }

  editar(id) {
    console.log(id);
  }

  cambiarEstado(element) {
    console.log(element);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
