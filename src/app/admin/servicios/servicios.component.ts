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
  servicio: Servicio;
  displayedColumns: string[] = ['#', 'nombre', 'estado', 'creado', 'actualizado', 'accion'];
  editarDato = false;

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

    if (this.servicio) {
      config.data = this.servicio;
      delete this.servicio;
    }

    const dialogRef = this.modal.open(FormServiciosComponent, config);
    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.registrar(result);
      }

    });
  }

  registrar(servicio: Servicio) {
    /*
    comprobamos si lo datos se va a editar y llamamos al
    service para editar los datos del servidor
    */
    if (this.editarDato) {
        console.log('editado');
        this.serv.editarServicio(servicio).subscribe( resp => {
          console.log(resp);
          this.ngOnInit();
        });

    } else {
      this.serv.registrarServicio(servicio).subscribe(resp => {
        console.log(resp);
        this.ngOnInit();
      });
    }
    this.editarDato = false;
  }

  editar(servicio: Servicio) {
    this.servicio = servicio;
    console.log(servicio);
    this.editarDato = true;
    this.openDialogoForm();
  }

  cambiarEstado(servicio: Servicio) {

    let estado: number;

    if (servicio.estado) {
      estado = 0;
    } else {
      estado = 1;
    }
    const newServicio: Servicio = new Servicio();
    newServicio.id = servicio.id;
    newServicio.nombre = servicio.nombre;
    newServicio.estado = estado;

    this.serv.editarServicio(newServicio).subscribe(resp => {
      console.log(resp);
      servicio.estado = estado;
    });
    return false;
  }


  eliminar(id: number) {
    this.serv.eliminarServicio(id).subscribe(resp => {
      console.log(resp);
      this.ngOnInit();
    });
  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
