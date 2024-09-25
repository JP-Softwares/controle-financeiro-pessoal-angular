import { Injectable } from '@angular/core';
import { Pessoa } from './Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  listaPessoas: Pessoa[] = [];
  
  constructor() { }

  listAll(): Pessoa[] {
    return this.listaPessoas;
  }

  getById(id: number): Pessoa | null {
    return this.listaPessoas.find((item) => item.id == id) || null;
  }

  editar(pessoa: Pessoa) {
    if(this.getById(pessoa.id) == null) throw Error("Pessoa não encontrada!");
    else {
      this.listaPessoas.map((item) => item.id == pessoa.id ? pessoa : item)
    }
  }

  delete(id: number): void {
    this.listaPessoas = this.listaPessoas.filter((item) => item.id != id);
  }

  add(pessoa: Pessoa): void {
    pessoa.id = this.listaPessoas.length == 0 ? 1 : (this.listaPessoas.at(this.listaPessoas.length-1) || new Pessoa()).id + 1;
    this.listaPessoas.push(pessoa);
  }
}
