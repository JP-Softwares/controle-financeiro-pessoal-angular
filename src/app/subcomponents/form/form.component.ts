import { Component, OnInit, Input, Output, EventEmitter, input, Predicate } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FieldComponent } from '../field/field.component';

@Component({
  selector: 'app-subcomponents-form',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule, FieldComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  
  @Input() objeto: any = {};

  @Input() naoAparecer: string[] = [];

  @Input() customProperties: any [] = [];

  constructor() {
    
  }

  customPropertiesByField: any = {};

  listaCampos: string[] = [];

  @Output() onSubmit = new EventEmitter<any>();

  enviar() {
    this.onSubmit.emit(this.objeto);
  }

  bindValue(evento:any, field:string) {
    this.objeto[field] = evento;
  }

  ngOnInit(): void {
    Object.keys(this.objeto).forEach((field: string) => {
      this.customPropertiesByField[field] = this.customProperties.find((item) => item['name'] == field);
    });

    this.listaCampos = Object.keys(this.objeto).filter((item) => !this.naoAparecer.includes(item));
  }

  findValueOrElse(list: [], fieldSearch: string, value:any, fieldResponse: string, elseValue: any): string {

    let objectFind:any = list.find((item) => item[fieldSearch] == value) || {};

    if(typeof objectFind == undefined) return elseValue;
    else return objectFind[fieldResponse] || "";
  }

}
