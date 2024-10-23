import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ObesosPorSexo } from './obesos-por-sexo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObesosPorSexoService {

  private baseUrl = "http://localhost:8303/v1/bancodesangue/percentual/obesos/sexo";

  constructor(private httpClient: HttpClient) { }

  getObesos(): Observable<ObesosPorSexo> {
    return this.httpClient.get<ObesosPorSexo>(`${this.baseUrl}`)
  }
}
