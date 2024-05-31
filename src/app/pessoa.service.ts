import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private baseUrl = "http://localhost:8080/v1/bancodesangue/pessoas";
  private registraPessoaUrl = "http://localhost:8080/v1/bancodesangue/envia/pessoas";

  constructor(private httpClient: HttpClient) { }

  getPessoas(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(`${this.baseUrl}`)
  }

  registraPessoa(pessoa: Pessoa): Observable<Object> {
    console.log(pessoa)
    return this.httpClient.post(`${this.registraPessoaUrl}`, pessoa);
  }

}
