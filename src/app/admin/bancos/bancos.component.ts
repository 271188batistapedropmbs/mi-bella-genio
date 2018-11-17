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
  bancos: Banco[] = [];
  subscription: Subscription;
  dataSource: any;
  displayedColumns: string[] = ['#', 'nombre', 'numero_cuenta', 'tipo_cuenta', 'usuario_cuenta', 'usuario_cedula', 'estado', 'eliminar'];

  constructor(private servBanco: BancosService, private snackbar: MatSnackBar, private dialogo: MatDialog) { }

  ngOnInit() {
   this.subscription =  this.servBanco.getBancos().subscribe( (resp: any) => {
     this.bancos = resp.bancos;
      this.dataSource = new MatTableDataSource(this.bancos);

      // ordenan dato de la table
      this.dataSource.sort = this.sort;

       // paginaction de la tabla
       this.dataSource.paginator = this.paginator;

    });
  }

  filtrar(filtro): void {
    this.dataSource.filter = filtro.trim().toLocaleLowerCase();
  }


  openDialogo(tipo: string, banco?: Banco): any {

    const dialogoConfig = new MatDialogConfig();
    dialogoConfig.width = '60%';
    dialogoConfig.height = 'auto';

    if (tipo === 'editar') {
      dialogoConfig.data = banco;
    }

    const dialogoRef = this.dialogo.open(FormBancosComponent, dialogoConfig);
    return dialogoRef;
  }

  registrar() {

      const referencia = this.openDialogo('registrar');
      referencia.afterClosed().subscribe(result => {
        if (result) {
          this.servBanco.registrar(result).subscribe(resp => {
            this.snackbar.open(resp.respuesta, 'Ok', {
              duration: 5000
            });
            result.id = resp.id;
            this.bancos.push(result);
            this.dataSource =  new MatTableDataSource(this.bancos);
          },
          error => {
            console.log(error);
          });
        }
      });
  }

  editar(banco: Banco) {
    const referencia = this.openDialogo('editar', banco);
      referencia.afterClosed().subscribe(result => {
        if (result) {
          this.servBanco.editar(result).subscribe(resp => {
            this.snackbar.open(resp.respuesta, 'Ok', {
              duration: 5000
            });

            const index = this.bancos.indexOf(banco);
            banco = result;
            this.bancos.splice(index, 1, banco);
            this.dataSource =  new MatTableDataSource(this.bancos);
          },
          error => {
            console.log(error);
          });
        }
      });
  }

  cambiarEstado(banco: Banco) {

    let estado: number;

    if (banco.estado) {
      estado = 0;
    } else {
      estado = 1;
    }
    const newBanco: Banco = new Banco();

    newBanco.id = banco.id;
    newBanco.nombre = banco.nombre;
    newBanco.numero_cuenta = banco.numero_cuenta;
    newBanco.tipo_cuenta = banco.tipo_cuenta;
    newBanco.usuario_cuenta = banco.usuario_cuenta;
    newBanco.usuario_cedula = banco.usuario_cedula;
    newBanco.estado = estado;

    this.servBanco.editar(newBanco).subscribe(resp => {

      this.snackbar.open(resp.respuesta, 'Ok', {
        duration: 5000
      });
      banco.estado = estado;
    });
    return false;
  }

  eliminar(banco: Banco) {
    const confirmar = confirm('Esta seguro que deseas eliminar esto ? ');
    if (!confirmar) {
      return false;
    }

   this.servBanco.eliminar(banco.id).subscribe(resp => {
      this.snackbar.open(resp.respuesta, 'Ok', {
        duration: 5000
      });
    const index = this.bancos.indexOf(banco);
    this.bancos.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.bancos);
    },
    error => {
      console.log(error);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
