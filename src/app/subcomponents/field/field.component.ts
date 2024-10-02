import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-subcomponents-field',
  standalone: true,
  imports: [FormsModule, InputTextModule, DropdownModule],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss'
})
export class FieldComponent implements OnInit {

  @Input() name:string = "";

  @Input() customProperties: any = {};

  @Input() value:any;

  capitalizeName: string = "";

  inputType: string = "";

  type: string = "input";

  select: any = undefined;

  selectedItem: any = "";

  listaValores: any[] = [];

  @Output() valueChanged = new EventEmitter<any>();

  observeChanges(property: string, object: any, execute: any, condicao?: any) {
    let timeoutValue: any = setTimeout(() => {
      console.log({name: this.name, message: "executando"});
      condicao = condicao || (() => {return object[property as keyof FieldComponent];});
      if(condicao(object)) {
        console.log("passou");
        clearTimeout(timeoutValue);
        execute();
      }
    }, 100);
  }

  mapearCampos() {
    this.listaValores.forEach((selectItem: any) => {
      selectItem['_displayValueField'] = this.select['displayValueFunction'](selectItem);
      selectItem['_filterField'] = this.select['searchValueFunction'](selectItem);
    });
  }

  ngOnInit(): void {
    this.customProperties = this.customProperties || {};
    this.type = this.customProperties['type'] || "input";
    this.select = this.customProperties['select'] || {};

    this.capitalizeName = this.name[0].toUpperCase() + this.name.substring(1);

    if(["senha", "password"].includes(this.name.toLowerCase())) {
      this.inputType = "password";
    } else if(["email", "e-mail"].includes(this.name.toLowerCase())) {
      this.capitalizeName = "E-mail";
      this.inputType = "email";
    } else this.inputType = typeof this.value;

    

    if(this.select && this.select['selectItems']) {
      
      if(this.select['selectItems'].subscribe) {
        this.select['selectItems'].subscribe((lista: any[]) => {
          this.listaValores = lista.map((item) => this.select['typeOfItems'].from(item));
          this.mapearCampos()
        })
      } else this.mapearCampos();
    }


    
  }

  onValueChanged() {
    this.valueChanged.emit(this.value)
  }

}
