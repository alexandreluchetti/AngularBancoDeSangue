import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { MediaIdadePorTipoSanguineo } from './media-idade-por-tipo-sanguineo'

@Injectable({
  providedIn: 'root'
})
export class MediaIdadePorTipoSanguineoService {

  private baseUrl = "http://localhost:8303/v1/bancodesangue/media/idade/tiposanguineo";

  constructor(private httpClient: HttpClient) { }

  getMediaDeIdadePorTipoSanguineo(): Observable<MediaIdadePorTipoSanguineo> {
    return this.httpClient.get<MediaIdadePorTipoSanguineo>(`${this.baseUrl}`)
  }
}
