import { EspecieComponent } from "./especie/especie.component";
import { SubgeneroComponent } from "./subgenero/subgenero.component";
import { GeneroComponent } from "./genero/genero.component";
import { SupertriboComponent } from "./supertribo/supertribo.component";
import { SubfamiliaComponent } from "./subfamilia/subfamilia.component";
import { FamiliaComponent } from "./familia/familia.component";
import { FiloComponent } from "./filo/filo.component";

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FormsComponent } from "./forms.component";

import { ReinoComponent } from "./reino/reino.component";
import { ClasseComponent } from "./classe/classe.component";
import { OrdemComponent } from "./ordem/ordem.component";
import { TriboComponent } from "./tribo/tribo.component";
import { SubtriboComponent } from "./subtribo/subtribo.component";

const routes: Routes = [
  {
    path: "",
    component: FormsComponent,
    children: [
      {
        path: "reino",
        component: ReinoComponent,
      },
      {
        path: "filo",
        component: FiloComponent,
      },
      {
        path: "classe",
        component: ClasseComponent,
      },
      {
        path: "Ordem",
        component: OrdemComponent,
      },
      {
        path: "Familia",
        component: FamiliaComponent,
      },
      {
        path: "Subfamilia",
        component: SubfamiliaComponent,
      },
      {
        path: "Supertribo",
        component: SupertriboComponent,
      },
      {
        path: "Tribo",
        component: TriboComponent,
      },
      {
        path: "Subtribo",
        component: SubtriboComponent,
      },
      {
        path: "Genero",
        component: GeneroComponent,
      },
      {
        path: "Subgenero",
        component: SubgeneroComponent,
      },
      {
        path: "Especie",
        component: EspecieComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
