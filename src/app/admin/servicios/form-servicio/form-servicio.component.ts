import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
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
  constructor(
    private _fb: FormBuilder,
    public dialogRef: MatDialogRef<FormServiciosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Servicio
    ) { }

  ngOnInit() {
    this.initForm();

  }

  initForm() {
    this.formServicio = this._fb.group({
      id: '',
      nombre: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(5), Validators.pattern('[a-zA-Z ]*')]],
      estado: ['', [Validators.required, Validators.pattern('[0-1]{1}')]]
    });
    // comprobamos si existe el objecto data para la edicion
    if (this.data) {
      // comprobamos si el objecto data tiene un id
      if (this.data.id) {
        this.servicio = this.data;
        delete this.data;
        // llamamo a la funcion editar
        this.editar();
      }
    }
  }

  editar() {
      this.formServicio.setValue({
        id: this.servicio.id,
        nombre : this.servicio.nombre,
        estado : this.servicio.estado
      });

  }

  onSubmit() {
    if (!this.formServicio.valid) {
      return false;
    } else {
      // paso datos al component servicios y cierro el form dialogo
      this.dialogRef.close(this.formServicio.value);
    }
  }


}
