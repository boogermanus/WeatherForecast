import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatButtonToggleModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  exports: [
    MatButtonModule,
    MatButtonToggleModule,
  ]
})
export class MaterialModule { }
