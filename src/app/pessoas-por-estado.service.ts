import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { MediaIdadePorTipoSanguineo } from './media-idade-por-tipo-sanguineo'

@Injectable({
  providedIn: 'root'
})
export class PessoasPorEstadoService {

  private baseUrl = "http://localhost:8080/v1/bancodesangue/pessoas/estados";

  constructor(private httpClient: HttpClient) { }

  getNumeroDePessoasPorEstado(): Observable<MediaIdadePorTipoSanguineo> {
    return this.httpClient.get<MediaIdadePorTipoSanguineo>(`${this.baseUrl}`)
  } 
}
