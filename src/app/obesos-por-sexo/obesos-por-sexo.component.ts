import { Component, OnInit } from '@angular/core';
import { ObesosPorSexo } from '../obesos-por-sexo';
import { ObesosPorSexoService } from '../obesos-por-sexo.service'

@Component({
  selector: 'app-obesos-por-sexo',
  templateUrl: './obesos-por-sexo.component.html',
  styleUrls: ['./obesos-por-sexo.component.css']
})
export class ObesosPorSexoComponent implements OnInit {

  obesos: ObesosPorSexo;

  constructor(private service: ObesosPorSexoService) { }

  ngOnInit(): void {
    this.getObesos();
  }

  private getObesos() {
    this.service.getObesos().subscribe(data => {
      this.obesos = data
    })
  }

}
