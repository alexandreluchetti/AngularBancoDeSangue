import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { PessoaService } from '../pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cria-pessoa',
  templateUrl: './cria-pessoa.component.html',
  styleUrls: ['./cria-pessoa.component.css']
})
export class CriaPessoaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  constructor(
    private pessoaService: PessoaService,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
  }

  registraPessoa() {
    this.pessoaService.registraPessoa(this.pessoa).subscribe(data => {
      console.log(data);
      this.goToListaPessoa();
    });
    error => console.log(error);
  }

  goToListaPessoa() {
    this.router.navigate(['/pessoas'])
  }

  onSubmit() {
    console.log(this.pessoa);
    this.registraPessoa();
  }

}
