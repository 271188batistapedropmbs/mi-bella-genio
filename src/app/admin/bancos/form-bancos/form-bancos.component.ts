import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-bancos',
  templateUrl: './form-bancos.component.html',
  styleUrls: ['./form-bancos.component.css']
})
export class FormBancosComponent implements OnInit {

  formBanco: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formBanco = this._fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(70), Validators.pattern('[a-zA-Z ]')]],
      numero_cuenta: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('[0-9]')]],
      tipo_cuenta: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(6), Validators.pattern('[a-zA-Z]')]],
      usuario_cuenta: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(80), Validators.pattern('[a-zA-Z ] *')]],
      usuario_cedula: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8), Validators.pattern('[0-9]')]],
      estado: ['', [Validators.required, Validators.pattern('[0-1]{1}')]]
    });
  }




}
