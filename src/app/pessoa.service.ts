import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private baseUrl = "http://localhost:8303/v1/bancodesangue/pessoas";
  private registraPessoaUrl = "http://localhost:8303/v1/bancodesangue/pessoa";
  private registraPessoasUrl = "http://localhost:8303/v1/bancodesangue/pessoas";

  constructor(private httpClient: HttpClient) { }

  getPessoas(): Observable<Pessoa[]> {
    console.log(this.baseUrl)
    return this.httpClient.get<Pessoa[]>(`${this.baseUrl}`)
  }

  registraPessoa(pessoa: Pessoa): Observable<Object> {
    console.log(pessoa)
    return this.httpClient.post(`${this.registraPessoaUrl}`, pessoa);
  }

  registraPessoas(pessoas: Pessoa[]): Observable<Object> {
    console.log(pessoas)
    return this.httpClient.post(`${this.registraPessoasUrl}`, pessoas);
  }

}
