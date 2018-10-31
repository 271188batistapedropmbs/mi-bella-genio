import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';
import { MatTableDataSource } from '@angular/material';
import {Subscription} from 'rxjs';
import { Servicio } from 'src/app/models/servicio';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  dataSource: any;
  servicios: Servicio[] = [];
  displayColumns: string[] = ['#', 'nombre', 'estado', 'creado', 'actualizado', 'acciones'];

  constructor(private serv: ServiciosService) { }

  ngOnInit() {
   this.subscription = this.serv.getServicios().subscribe((resp: any) => {
      console.log(resp);
      this.servicios = resp.servicios;
      this.dataSource = new MatTableDataSource(resp.servicios);
    });
  }

  filtrar(filtro): void {
    this.dataSource.filter = filtro.trim().toLocaleLowerCase();
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
