import { Component, OnInit } from '@angular/core';
import { MediaIdadePorTipoSanguineo } from '../media-idade-por-tipo-sanguineo'
import { MediaIdadePorTipoSanguineoService } from '../media-idade-por-tipo-sanguineo.service'

@Component({
  selector: 'app-media-idade-por-tipo-sanguineo',
  templateUrl: './media-idade-por-tipo-sanguineo.component.html',
  styleUrls: ['./media-idade-por-tipo-sanguineo.component.css']
})
export class MediaIdadePorTipoSanguineoComponent implements OnInit {

  map: MediaIdadePorTipoSanguineo;

  constructor(private service: MediaIdadePorTipoSanguineoService) { }

  ngOnInit(): void {
    this.getMediaDeIdadePorTipoSanguineo();
  }

  private getMediaDeIdadePorTipoSanguineo() {
    this.service.getMediaDeIdadePorTipoSanguineo().subscribe(data => {
      this.map = data
    })
  }

}
