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

  @Input() types: [] = [];

  tipos: any = {};

  listaCampos: string[] = [];

  @Output() onSubmit = new EventEmitter<any>();

  enviar() {
    this.onSubmit.emit(this.objeto);
  }

  bindValue(evento:any, field:string) {
    this.objeto[field] = evento;
  }

  ngOnInit(): void {
    this.listaCampos = Object.keys(this.objeto).filter((item) => !this.naoAparecer.includes(item));

    Object.keys(this.objeto).forEach((field: string) => {
      this.tipos[field] = this.findValueOrElse(this.types, 'nome', field, 'nome', 'input')
    });
  }

  findValueOrElse(list: [], fieldSearch: string, value:any, fieldResponse: string, elseValue: any): string {

    let objectFind:any = list.find((item) => item[fieldSearch] == value) || {};

    if(typeof objectFind == undefined) return elseValue;
    else return objectFind[fieldResponse] || "";
  }

}
