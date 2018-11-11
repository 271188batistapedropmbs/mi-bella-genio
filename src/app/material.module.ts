import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import {MatDividerModule} from '@angular/material/divider';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
   MatSelectModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  imports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule
  ],

  exports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule,
  ],

  declarations: []
})
export class MaterialModule { }
