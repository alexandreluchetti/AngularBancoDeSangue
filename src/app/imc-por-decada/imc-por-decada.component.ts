import { Component, OnInit } from '@angular/core';
import { MediaIdadePorTipoSanguineo } from '../media-idade-por-tipo-sanguineo'
import { ImcPorDecadaService } from '../imc-por-decada.service'

@Component({
  selector: 'app-imc-por-decada',
  templateUrl: './imc-por-decada.component.html',
  styleUrls: ['./imc-por-decada.component.css']
})
export class ImcPorDecadaComponent implements OnInit {

  map: MediaIdadePorTipoSanguineo;

  constructor(private service: ImcPorDecadaService) { }

  ngOnInit(): void {
    this.getImcPorDecada();
  }

  private getImcPorDecada() {
    this.service.getImcPorDecada().subscribe(data => {
      this.map = data
    })
  }

}
