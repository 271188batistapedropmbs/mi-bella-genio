import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { passValidator, espacioVacio, correoUnico} from '../../validador/helper';
import { RegistrarUsuarioService } from '../../services/registrar-usuario.service';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})

export class RegistrarseComponent implements OnInit {
  // constante de date picker del campo fecha
  minDate = new Date(1940, 0, 1);
  maxDate = new Date(2000, 11, 31);
  // fin del date picker del campo fecha
  formRegistrar: FormGroup;
  usuario: Usuario = new Usuario();
  constructor(
    public _fb: FormBuilder,
    private serviceUsuario: RegistrarUsuarioService,
    private route: Router,
    public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formRegistrar = this._fb.group({
        nombre : ['', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
          Validators.pattern('[a-zA-Z ]*'),
          espacioVacio
          ]
        ],
        apellido : ['',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(25),
            Validators.pattern('[a-zA-Z]*'),
            espacioVacio
          ]
        ],
        fecha : ['', [Validators.required]],
        correo : ['',
            {
              validators: [Validators.required, Validators.email],
              asyncValidators: [correoUnico(this.serviceUsuario).bind(this)],
              updateOn: 'blur'
            }
        ],
        telefono : ['',
          [
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11),
            Validators.pattern('[0-9]*')
          ]
        ],
        clave : ['', [Validators.required, Validators.minLength(8), espacioVacio]],
        confirmarClave : ['', [Validators.required, passValidator]],
    });
  }

  onSubmit() {
    if (this.formRegistrar.valid) {

      let fecha = this.formRegistrar.get('fecha').value;
      fecha = fecha.getFullYear() + '/' + (fecha.getMonth() + 1 ) + '/' + fecha.getDate();

      this.usuario = {
        nombre: this.formRegistrar.get('nombre').value,
        apellido: this.formRegistrar.get('apellido').value,
        fecha_nacimiento: fecha,
        email: this.formRegistrar.get('correo').value,
        telefono: this.formRegistrar.get('telefono').value,
        password: this.formRegistrar.get('clave').value
      };

      this.serviceUsuario.registrar(this.usuario).subscribe(
        (data) => {
           console.log(data);
           this.snackbar.open('Exito ', 'Usuario Registrado Con Exito', {
             duration: 10000,
             horizontalPosition: 'center',
             verticalPosition: 'bottom'
           });
             this.route.navigate(['/login']);
          });
     }

  }

}
