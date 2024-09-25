import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { FormComponent } from './form/form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [FieldComponent, FormComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class SubcomponentsModule { }
