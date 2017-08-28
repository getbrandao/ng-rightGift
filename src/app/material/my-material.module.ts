import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdInputModule, MdButtonModule, MdIconModule } from '@angular/material';
import { MdMenuModule, MdDialogModule } from '@angular/material';
import { MdListModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdListModule,
    NoopAnimationsModule,
    MdDialogModule
  ],
  exports: [MdInputModule, MdButtonModule, MdIconModule, MdMenuModule, MdListModule,
            NoopAnimationsModule, MdDialogModule],
  declarations: []
})
export class MyMaterialModule { }
