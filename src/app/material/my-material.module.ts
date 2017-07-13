import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdInputModule, MdButtonModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdButtonModule,
    NoopAnimationsModule
  ],
  exports: [MdInputModule, MdButtonModule, NoopAnimationsModule],
  declarations: []
})
export class MyMaterialModule { }
