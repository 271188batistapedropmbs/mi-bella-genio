import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { espacioVacio } from '../validador/helper';
import { ContactoService } from '../services/contacto.service';
import { Contacto } from '../models/contacto';
import swal from 'sweetalert';



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})



export class ContactoComponent implements OnInit {

  formContacto: FormGroup;
  contacto: Contacto;


  constructor(private _fb: FormBuilder, private  _contactoServ: ContactoService, public router: Router) { }

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
      swal('gracias por contactarnos', data.mensaje, 'success');
      this.router.navigate(['/inicio']);
    }, (error) => {
      console.log(error);
    });
  }
}
