import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-subcomponents-table',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit, OnChanges {

  @Input() lista:any = [];

  listaFinal: any = [];

  @Input() typeOfItems: any = null;

  @Input() tabela: any = null;

  colunas:string[] = [];
  
  @Output() onEdit = new EventEmitter<any>();
  @Output() onRemove = new EventEmitter<any>();

  onlyUnique(value:any, index: number, array: any[]) {
    return array.indexOf(value) === index;
  }  

  ngOnInit(): void {
    if(this.lista.subscribe) {
      this.lista.subscribe((listaValores: any[]) => {
        this.listaFinal = listaValores.map((item: any) => this.typeOfItems.from(item));
        this.formatarLista()
    });
    }else this.formatarLista();

    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['lista'].firstChange) {
      this.ngOnInit()
    }
  }
  
  formatarLista() {
    let listaColunas:string[] = [];
    this.listaFinal.forEach((item: any) => {
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

  funcao(item: any, coluna: string): string {
    return typeof item[coluna] == "object" ? item[coluna].displayValue() : item[coluna]
  }

}
