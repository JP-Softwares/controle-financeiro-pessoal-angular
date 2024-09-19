import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-subcomponents-table',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {

  @Input() lista:any[] = [];

  colunas:string[] = [];
  
  @Output() onEdit = new EventEmitter<any>();
  @Output() onRemove = new EventEmitter<any>();

  onlyUnique(value:any, index: number, array: any[]) {
    return array.indexOf(value) === index;
  }  

  ngOnInit(): void {
    let listaColunas:string[] = [];
    this.lista.forEach((item) => {
      if(typeof item == 'object') listaColunas.push(...Object.keys(item))
    });
    this.colunas = listaColunas.filter(this.onlyUnique);
  }

  editar(objeto: any) {
    this.onEdit.emit(objeto);
  }

  excluir(objeto: any) {
    this.onRemove.emit(objeto);
  }

}
