import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { delay } from 'rxjs';

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

  listaObservable: boolean = false;
  
  @Output() onEdit = new EventEmitter<any>();
  @Output() onRemove = new EventEmitter<any>();

  onlyUnique(value:any, index: number, array: any[]) {
    return array.indexOf(value) === index;
  }  

  ngOnInit(): void {
    if(this.lista.subscribe) {
      this.listaObservable = true;
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

    if(this.listaObservable) {
      let intervalo = setInterval(() => {
        if(this.lista.subscribe) {
          clearInterval(intervalo);
          this.ngOnInit();
        }
      }, 100);
    }
  }

  funcao(item: any, coluna: string): string {
    let valor = item[coluna];

    if(typeof valor == "object") {
      if(new Date(valor).toString() !== "Invalid Date") return new Date(valor).toLocaleDateString("pt-BR");
      else if(item[coluna].displayValue) return item[coluna].displayValue();
      else return item[coluna];
    } else{
      return item[coluna];
    }
  }

}
