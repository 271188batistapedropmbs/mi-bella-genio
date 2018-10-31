import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
import {Subscription} from 'rxjs';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})


export class UsuariosComponent implements OnInit, OnDestroy {

  usuarios: Usuario[] = [];
  displayedColumns: string[] = ['#', 'nombre', 'apellido', 'fecha_nacimiento', 'email', 'telefono', 'tipo', 'creado', 'actualizado'];
  subscription: Subscription;

  constructor(private servUsuario: UsuariosService) { }

  ngOnInit() {
   this.subscription = this.servUsuario.getUsuarios().subscribe( (resp: any) => {
      console.log(resp);
      this.usuarios = resp.usuarios;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
