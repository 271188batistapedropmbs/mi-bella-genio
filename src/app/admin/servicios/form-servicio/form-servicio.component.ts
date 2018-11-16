import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Servicio } from 'src/app/models/servicio';
import { servicioUnico } from 'src/app/validador/helper';
import { ServiciosService } from 'src/app/services/servicios.service';

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
    public _serv: ServiciosService,
    public dialogRef: MatDialogRef<FormServiciosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Servicio
    ) { }

  ngOnInit() {

    this.init();

  }

  init() {
    if (this.data) {
      if (this.data.id) {
        this.servicio = this.data;
        delete this.data;
        this.editar();
      }
    } else {

      this.initForm();
    }
  }

  initForm() {
    this.formServicio = this._fb.group({
      id: '',
      nombre: ['',
        {
          validators:
          [
            Validators.required,
            Validators.maxLength(30),
            Validators.minLength(5),
            Validators.pattern('[a-zA-Z\u00f1\u00d1 ]*')
          ],
          asyncValidators : [servicioUnico(this._serv).bind(this)],
          updateOn: 'blur'
        }
      ],
      estado: ['', [Validators.required, Validators.pattern('[0-1]{1}')]]
    });
  }

  initFormEdit() {
    this.formServicio = this._fb.group({
      id: '',
      nombre: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(5), Validators.pattern('[a-zA-Z\u00f1\u00d1 ]*')]],
      estado: ['', [Validators.required, Validators.pattern('[0-1]{1}')]]
    });
  }

  editar() {
      this.initFormEdit();
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
