import { Injectable } from '@angular/core';
import { Lancamento } from './Lancamento';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  listaLancamentos: Lancamento[] = [];
  
  constructor() { }

  listAll(): Lancamento[] {
    return this.listaLancamentos;
  }

  getById(id: number): Lancamento | null {
    return this.listaLancamentos.find((item) => item.id == id) || null;
  }

  editar(lancamento: Lancamento): Lancamento {
    if(this.getById(lancamento.id) == null) throw Error("Lancamento não encontrado!");
    else {
      this.listaLancamentos.map((item) => item.id == lancamento.id ? lancamento : item);

      return lancamento;
    }
  }

  delete(id: number): void {
    this.listaLancamentos = this.listaLancamentos.filter((item) => item.id != id);
  }

  add(lancamento: Lancamento): void {
    lancamento.id = this.listaLancamentos.length == 0 ? 1 : (this.listaLancamentos.at(this.listaLancamentos.length-1) || new Lancamento()).id + 1;
    this.listaLancamentos.push(lancamento);
  }
}
