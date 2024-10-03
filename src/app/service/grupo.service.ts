import { Injectable } from '@angular/core';
import { Grupo } from '../modelos/grupo';
import { HttpClient } from '@angular/common/http';
import { DefaultService } from './default.service';

@Injectable({
  providedIn: 'root'
})
export class GrupoService extends DefaultService<Grupo> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, "grupos");
  }
}