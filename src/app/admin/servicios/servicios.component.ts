import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { ServiciosService } from 'src/app/services/servicios.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { FormServiciosComponent } from './form-servicio/form-servicio.component';
import {Subscription} from 'rxjs';


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

  constructor(private serv: ServiciosService, public modal: MatDialog , public snackbar: MatSnackBar ) { }

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

        this.serv.editarServicio(servicio).subscribe( resp => {

          this.snackbar.open(resp.respuesta, 'Ok', {
            duration: 5000
          });
          this.ngOnInit();
        });

    } else {
      this.serv.registrarServicio(servicio).subscribe(resp => {
        this.snackbar.open(resp.respuesta, 'Ok', {
          duration: 5000
        });
        this.ngOnInit();
      });
    }
    this.editarDato = false;
  }

  editar(servicio: Servicio) {
    this.servicio = servicio;
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

      this.snackbar.open(resp.respuesta, 'Ok', {
        duration: 5000
      });
      servicio.estado = estado;
    });
    return false;
  }


  eliminar(id: number) {

    const opcion = confirm('Deseas eliminar este servicio');
    if (!opcion) {
      return false;
    }
    this.serv.eliminarServicio(id).subscribe(resp => {
      this.snackbar.open(resp.respuesta, 'Ok', {
        duration: 5000
      });
      this.ngOnInit();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
