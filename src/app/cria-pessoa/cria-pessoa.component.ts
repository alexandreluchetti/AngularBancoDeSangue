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
  pessoas: Pessoa[] = [];

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

  onFileChange(event) {
    const file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      let text = reader.result.toString();
      console.log(text); 
      this.pessoas = JSON.parse(text);
      console.log(this.pessoas);

      this.pessoaService.registraPessoas(this.pessoas).subscribe(data => {
        console.log(data);
        this.goToListaPessoa();
      });
    }
    reader.readAsText(file);
  }

  goToListaPessoa() {
    this.router.navigate(['/pessoas'])
  }

  onSubmit() {
    console.log(this.pessoa);
    this.registraPessoa();
  }

}
