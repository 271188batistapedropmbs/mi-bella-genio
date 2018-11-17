import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Banco } from 'src/app/models/banco';

@Component({
  selector: 'app-form-bancos',
  templateUrl: './form-bancos.component.html',
  styleUrls: ['./form-bancos.component.css']
})
export class FormBancosComponent implements OnInit {

  formBanco: FormGroup;
  banco: Banco;
  estado: Array<number> = [0, 1];
  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<FormBancosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Banco
    ) { }

  ngOnInit() {
    this.init();
  }

  init() {
    if (this.data) {
      if (this.data.id) {
        this.banco = this.data;
        delete this.data;
        this.editar();
      }
    } else {

      this.initForm();
    }
  }

  initForm() {
    this.formBanco = this._fb.group({
      id: '',
      nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(70), Validators.pattern('[a-zA-Z ]*')]],
      numero_cuenta: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(20), Validators.pattern('[0-9]*')]],
      tipo_cuenta: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(6), Validators.pattern('[a-zA-Z]*')]],
      usuario_cuenta: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(80), Validators.pattern('[a-zA-Z ]*')]],
      usuario_cedula: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(8), Validators.pattern('[0-9]*')]],
      estado: ['', [Validators.required, Validators.pattern('[0-1]{1}')]]
    });
  }

  initFormEdit() {
    this.formBanco = this._fb.group({
      id: this.banco.id,
      nombre:
      [
        this.banco.nombre,
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(70),
          Validators.pattern('[a-zA-Z ]*')
        ]
      ],
      numero_cuenta:
      [
        this.banco.numero_cuenta,
        [
          Validators.required,
          Validators.minLength(20),
          Validators.maxLength(20),
          Validators.pattern('[0-9]*')
        ]
      ],
      tipo_cuenta:
      [
        this.banco.tipo_cuenta,
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(6),
          Validators.pattern('[a-zA-Z]*')
        ]
      ],
      usuario_cuenta:
      [
        this.banco.usuario_cuenta,
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(80),
          Validators.pattern('[a-zA-Z ]*')
        ]
      ],
      usuario_cedula:
      [
        this.banco.usuario_cedula,
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(8),
          Validators.pattern('[0-9]*')
        ]
      ],
      estado:
      [
        this.banco.estado,
        [
          Validators.required,
          Validators.pattern('[0-1]{1}')
        ]
      ]
    });
  }

  editar() {
    this.initFormEdit();
    /*this.formBanco.setValue({
      id : this.banco.id,
      nombre: this.banco.nombre,
      numero_cuenta: this.banco.numero_cuenta,
      tipo_cuenta : this.banco.tipo_cuenta,
      usuario_cuenta: this.banco.usuario_cuenta,
      usuario_cedula: this.banco.usuario_cedula,
      estado: this.banco.estado
    });*/
  }

  onSubmit() {
    if (!this.formBanco.valid) {
      return false;
    } else {
      // paso datos al component servicios y cierro el form dialogo
      this.dialogRef.close(this.formBanco.value);
    }
  }




}
