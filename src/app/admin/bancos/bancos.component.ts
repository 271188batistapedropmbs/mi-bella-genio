import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Banco } from 'src/app/models/banco';
import { MatTableDataSource, MatSort, MatPaginator, MatSnackBar, MatDialog, MatDialogConfig} from '@angular/material';
import { BancosService } from 'src/app/services/bancos.service';
import {Subscription} from 'rxjs';
import { FormBancosComponent } from './form-bancos/form-bancos.component';


@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.css']
})
export class BancosComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // bbancos: Banco[] = [];
  subscription: Subscription;
  dataSource: any;
  displayedColumns: string[] = ['#', 'nombre', 'numero_cuenta', 'tipo_cuenta', 'usuario_cuenta', 'usuario_cedula', 'estado', 'eliminar'];

  constructor(private servBanco: BancosService, private snackbar: MatSnackBar, private dialogo: MatDialog) { }

  ngOnInit() {
   this.subscription =  this.servBanco.getBancos().subscribe( (resp: any) => {
     // this.bancos = resp.bancos;
      this.dataSource = new MatTableDataSource(resp.bancos);

      // ordenan dato de la table
      this.dataSource.sort = this.sort;

       // paginaction de la tabla
       this.dataSource.paginator = this.paginator;

    });
  }

  filtrar(filtro): void {
    this.dataSource.filter = filtro.trim().toLocaleLowerCase();
  }

  registrar() {

    const dialogoConfig = new MatDialogConfig();
    dialogoConfig.width = '50%';
    dialogoConfig.height = 'auto';

    this.dialogo.open(FormBancosComponent, dialogoConfig);

  }

  eliminar(id) {
    console.log(id);
  }

  editar(id) {
    this.snackbar.open('prueba', 'esto es una prueba', {
      duration: 3000,
    });
  }

  cambiarEstado(element) {
    console.log(element);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
