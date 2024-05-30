import { Component, OnInit } from '@angular/core';
import { MediaIdadePorTipoSanguineo } from '../media-idade-por-tipo-sanguineo'
import { DoadoresParaCadaSangueReceptorService } from '../doadores-para-cada-sangue-receptor.service'

@Component({
  selector: 'app-doadores-para-cada-sangue-receptor',
  templateUrl: './doadores-para-cada-sangue-receptor.component.html',
  styleUrls: ['./doadores-para-cada-sangue-receptor.component.css']
})
export class DoadoresParaCadaSangueReceptorComponent implements OnInit {

  map: MediaIdadePorTipoSanguineo;

  constructor(private service: DoadoresParaCadaSangueReceptorService) { }

  ngOnInit(): void {
    this.getDoadoresParaCadaTipoSanguineoReceptor();
  }

  private getDoadoresParaCadaTipoSanguineoReceptor() {
    this.service.getDoadoresParaCadaTipoSanguineoReceptor().subscribe(data => {
      this.map = data
    })
  }

}
