import { Injectable } from '@angular/core';
import { Grupo } from './grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  listaGrupos: Grupo[] = [];
  
  constructor() { }

  listAll(): Grupo[] {
    return this.listaGrupos;
  }

  getById(id: number): Grupo | null {
    return this.listaGrupos.find((item) => item.id == id) || null;
  }

  editar(grupo: Grupo) {
    if(this.getById(grupo.id) == null) throw Error("Grupo não encontrado!");
    else {
      this.listaGrupos.map((item) => item.id == grupo.id ? grupo : item)
    }
  }

  delete(id: number): void {
    this.listaGrupos = this.listaGrupos.filter((item) => item.id != id);
  }

  add(grupo: Grupo): void {
    grupo.id = this.listaGrupos.length == 0 ? 1 : (this.listaGrupos.at(this.listaGrupos.length-1) || new Grupo()).id + 1;
    this.listaGrupos.push(grupo);
  }
}