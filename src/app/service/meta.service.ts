import { Injectable } from '@angular/core';
import { Meta } from './meta';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  listaMetas: Meta[] = [];
  
  constructor() { }

  listAll(): Meta[] {
    return this.listaMetas;
  }

  getById(id: number): Meta | null {
    return this.listaMetas.find((item) => item.id == id) || null;
  }

  editar(meta: Meta): Meta {
    if(this.getById(meta.id) == null) throw Error("Meta não encontrado!");
    else {
      this.listaMetas.map((item) => item.id == meta.id ? meta : item);

      return meta;
    }
  }

  delete(id: number): void {
    this.listaMetas = this.listaMetas.filter((item) => item.id != id);
  }

  add(meta: Meta): void {
    meta.id = this.listaMetas.length == 0 ? 1 : (this.listaMetas.at(this.listaMetas.length-1) || new Meta()).id + 1;
    this.listaMetas.push(meta);
  }
}
