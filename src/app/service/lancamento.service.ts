import { Injectable } from '@angular/core';
import { Lancamento } from '../modelos/lancamento';
import { DefaultService } from './default.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService extends DefaultService<Lancamento> {
  constructor(private httpClient: HttpClient) {
    super(httpClient, "lancamentos");
  }
}