import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultService<T> {

  baseUrl: string = "https://controle-financeiro-pessoal-spring.up.railway.app/api/";

  constructor(private http: HttpClient, private tabela: String) { }

  getURL(): string {
    return this.baseUrl + this.tabela;
  }

  listAll(): Observable<T[]> {
    return this.http.get<T[]>(this.getURL());
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(this.getURL() + id);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(this.getURL(), item);
  }

  update(item: T): Observable<T> {
    return this.http.put<T>(this.getURL(), item);
  }

  delete(id: number) {
    this.http.delete(this.getURL() + id);
  }
}