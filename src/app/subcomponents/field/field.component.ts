import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-subcomponents-field',
  standalone: true,
  imports: [FormsModule, InputTextModule],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss'
})
export class FieldComponent implements OnInit {

  constructor() {
    this.type = this.type || "input";
  }

  @Input() name:string = "";

  @Input() type:string = "";

  @Input() value:any;

  capitalizeName: string = "";

  tipoCampo: string = "";

  @Output() valueChanged = new EventEmitter<any>();

  ngOnInit(): void {
    console.log("Tipo: " + this.type)

    this.capitalizeName = this.name[0].toUpperCase() + this.name.substring(1);

    if(["senha", "password"].includes(this.name.toLowerCase())) {
      this.tipoCampo = "password";
    } else if(["email", "e-mail"].includes(this.name.toLowerCase())) {
      this.capitalizeName = "E-mail";
      this.tipoCampo = "email";
    } else this.tipoCampo = typeof this.value;
  }

  onValueChanged() {
    this.valueChanged.emit(this.value)
  }

}
