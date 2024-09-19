import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldComponent } from './field/field.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [FieldComponent, FormComponent],
  imports: [
    CommonModule
  ]
})
export class SubcomponentsModule { }
