import { Injectable } from '@angular/core';
import { Meta } from '../modelos/meta';
import { HttpClient } from '@angular/common/http';
import { DefaultService } from './default.service';

@Injectable({
  providedIn: 'root'
})
export class MetaService  extends DefaultService<Meta> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, "metas");
  }
}