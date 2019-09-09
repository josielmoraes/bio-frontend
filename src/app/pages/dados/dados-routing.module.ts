import { EnderecoComponent } from "./endereco/endereco.component";
import { DadosComponent } from "./dados.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LocalidadeComponent } from "./localidade/localidade.component";
import { PessoaComponent } from "./pessoa/pessoa.component";

const routes: Routes = [
  {
    path: "",
    component: DadosComponent,
    children: [
      {
        path: "Localidade",
        component: LocalidadeComponent,
      },
      {
        path: "Endereco",
        component: EnderecoComponent,
      },
      {
        path: "Pessoa",
        component: PessoaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosRoutingModule {}
