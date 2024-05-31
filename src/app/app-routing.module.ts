import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { CriaPessoaComponent } from './cria-pessoa/cria-pessoa.component';
import { ObesosPorSexoComponent } from './obesos-por-sexo/obesos-por-sexo.component';
import { PessoasPorEstadoComponent } from './pessoas-por-estado/pessoas-por-estado.component';
import { ImcPorDecadaComponent } from './imc-por-decada/imc-por-decada.component';
import { MediaIdadePorTipoSanguineoComponent } from './media-idade-por-tipo-sanguineo/media-idade-por-tipo-sanguineo.component';
import { DoadoresParaCadaSangueReceptorComponent } from './doadores-para-cada-sangue-receptor/doadores-para-cada-sangue-receptor.component';

const routes: Routes = [
  {path: 'pessoas', component: PessoaListComponent},
  {path: 'cria-pessoa', component: CriaPessoaComponent},
  {path: 'obesos-por-sexo', component: ObesosPorSexoComponent},
  {path: 'pessoas-por-estado', component: PessoasPorEstadoComponent},
  {path: 'imc-medio-por-decada', component: ImcPorDecadaComponent},
  {path: 'media-idade-por-cada-sangue', component: MediaIdadePorTipoSanguineoComponent},
  {path: 'quantidade-doadores-para-cada-tipo-sanguineo-receptor', component: DoadoresParaCadaSangueReceptorComponent},
  {path: '', redirectTo: 'pessoas', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
