import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Servicio } from 'src/app/models/servicio';

@Component({
  selector: 'app-form-servicio',
  templateUrl: './form-servicio.component.html',
  styleUrls: ['./form-servicio.component.css']
})
export class FormServiciosComponent implements OnInit {


  formServicio: FormGroup;
  opciones: number[] = [0, 1];
  servicio: Servicio;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formServicio = this._fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(5), Validators.pattern('[a-zA-Z ]*')]],
      estado: ['', [Validators.required, Validators.pattern('[0-1]{1}')]]
    });
  }

  onSubmit() {
    if (! this.formServicio.valid) {
      return false;
    }

    console.log(this.formServicio.value);
  }

}
