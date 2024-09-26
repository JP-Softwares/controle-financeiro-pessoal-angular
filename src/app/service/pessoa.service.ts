import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';
import { HttpClient } from '@angular/common/http';
import { DefaultService } from './default.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends DefaultService<Pessoa> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, "pessoas");
  }
}
