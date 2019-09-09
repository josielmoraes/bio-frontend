import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DadosComponent } from "./dados.component";
import { DadosRoutingModule } from "./dados-routing.module";
import { DataTablesModule } from "angular-datatables";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NbToastrModule, NbCardModule, NbIconModule } from "@nebular/theme";
import { LocalidadeComponent } from "./localidade/localidade.component";
import { EnderecoComponent } from "./endereco/endereco.component";
import { PessoaComponent } from './pessoa/pessoa.component';

@NgModule({
  declarations: [DadosComponent, LocalidadeComponent, EnderecoComponent, PessoaComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbToastrModule,
    DadosRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbModule,
  ],
})
export class DadosModule {}
