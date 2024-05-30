import { Component, OnInit } from '@angular/core';
import { MediaIdadePorTipoSanguineo } from '../media-idade-por-tipo-sanguineo'
import { PessoasPorEstadoService } from '../pessoas-por-estado.service'

@Component({
  selector: 'app-pessoas-por-estado',
  templateUrl: './pessoas-por-estado.component.html',
  styleUrls: ['./pessoas-por-estado.component.css']
})
export class PessoasPorEstadoComponent implements OnInit {

  map: MediaIdadePorTipoSanguineo;

  constructor(private service: PessoasPorEstadoService) { }

  ngOnInit(): void {
    this.getNumeroDePessoasPorEstado();
  }

  private getNumeroDePessoasPorEstado() {
    this.service.getNumeroDePessoasPorEstado().subscribe(data => {
      this.map = data
    })
  }

}
