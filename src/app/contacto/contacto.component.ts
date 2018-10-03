import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { espacioVacio } from '../validador/helper';
import { ContactoService } from '../services/contacto.service';
import { Contacto } from '../models/contacto';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})



export class ContactoComponent implements OnInit {

  formContacto: FormGroup;
  contacto: Contacto;

  errorServidorNombre:  boolean;
  errorServidorCorreo:  boolean;
  errorServidorAsunto:  boolean;
  errorServidorMensaje: boolean;
  errorNombre: string;
  errorCorreo: string;
  errorAsunto: string;
  errorMensaje: string;

  constructor(private _fb: FormBuilder, private  _contactoServ: ContactoService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formContacto = this._fb.group({
      nombre:  ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*'), espacioVacio]],
      correo:  ['', [Validators.required, Validators.email]],
      asunto:  ['', [Validators.required, Validators.minLength(5), espacioVacio ]],
      mensaje: ['', [Validators.required, Validators.minLength(10), espacioVacio]],
    });
  }


  onSubmit() {
    this.contacto = this.formContacto.value;
    this._contactoServ.crearContacto(this.contacto).subscribe((data) => {
      console.log(data);
      alert(data.mensaje);
      this.formContacto.reset();
    }, (error) => {
      console.log(error);
    });
  }
}
