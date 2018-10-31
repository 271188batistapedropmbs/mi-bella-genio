import { Component, OnInit, OnDestroy } from '@angular/core';
import { Banco } from 'src/app/models/banco';
import {MatSnackBar} from '@angular/material';
import { BancosService } from 'src/app/services/bancos.service';
import { MatTableDataSource } from '@angular/material';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-bancos',
  templateUrl: './bancos.component.html',
  styleUrls: ['./bancos.component.css']
})
export class BancosComponent implements OnInit, OnDestroy {

  // bbancos: Banco[] = [];
  subscription: Subscription;
  dataSource: any;
  displayedColumns: string[] = ['#', 'nombre', 'numero_cuenta', 'tipo_cuenta', 'usuario_cuenta', 'usuario_cedula', 'estado', 'eliminar'];

  constructor(private servBanco: BancosService, private snackbar: MatSnackBar) { }

  ngOnInit() {
   this.subscription =  this.servBanco.getBancos().subscribe( (resp: any) => {
     // this.bancos = resp.bancos;
      this.dataSource = new MatTableDataSource(resp.bancos);
    });
  }

  filtrar(filtro): void {
    this.dataSource.filter = filtro.trim().toLocaleLowerCase();
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
