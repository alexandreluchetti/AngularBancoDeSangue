import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { ObesosPorSexoComponent } from './obesos-por-sexo/obesos-por-sexo.component';
import { MediaIdadePorTipoSanguineoComponent } from './media-idade-por-tipo-sanguineo/media-idade-por-tipo-sanguineo.component';
import { ImcPorDecadaComponent } from './imc-por-decada/imc-por-decada.component';
import { PessoasPorEstadoComponent } from './pessoas-por-estado/pessoas-por-estado.component';
import { DoadoresParaCadaSangueReceptorComponent } from './doadores-para-cada-sangue-receptor/doadores-para-cada-sangue-receptor.component';
import { CriaPessoaComponent } from './cria-pessoa/cria-pessoa.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    PessoaListComponent,
    ObesosPorSexoComponent,
    MediaIdadePorTipoSanguineoComponent,
    ImcPorDecadaComponent,
    PessoasPorEstadoComponent,
    DoadoresParaCadaSangueReceptorComponent,
    CriaPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
