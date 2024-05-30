import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa'
import { PessoaService } from '../pessoa.service'

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  pessoas: Pessoa[];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.getPessoas();
  }

  private getPessoas() {
    this.pessoaService.getPessoas().subscribe(data => {
      this.pessoas = data
    })
  }

}
