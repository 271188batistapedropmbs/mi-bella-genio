import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import {Subscription} from 'rxjs';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})


export class UsuariosComponent implements OnInit, OnDestroy {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  usuarios: Usuario[] = [];
  dataSource: any;
  displayedColumns: string[] = ['#', 'nombre', 'apellido', 'fecha_nacimiento', 'email', 'telefono', 'tipo', 'creado', 'actualizado'];
  subscription: Subscription;

  constructor(private servUsuario: UsuariosService) { }

  ngOnInit() {
   this.subscription = this.servUsuario.getUsuarios().subscribe( (resp: any) => {
      this.usuarios = resp.usuarios;
      this.dataSource = new MatTableDataSource(this.usuarios);

      this.dataSource.sort = this.sort;

      this.dataSource.paginator = this.paginator;
    });
  }

  filtrar(filtro): void {
    this.dataSource.filter = filtro.trim().toLocaleLowerCase();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
