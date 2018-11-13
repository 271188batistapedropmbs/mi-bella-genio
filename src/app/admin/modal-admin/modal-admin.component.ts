import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-modal-admin',
  templateUrl: './modal-admin.component.html',
  styleUrls: ['./modal-admin.component.css']
})
export class ModalAdminComponent implements OnInit {

  modalTitle: string;
  modalMesage: string;

  constructor(
    public dialogRef: MatDialogRef<ModalAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
    this.modalTitle = data.title;
    this.modalMesage = data.mesage;
   // this.dialogRef.close(data);
 }


  ngOnInit() {
  }

}
