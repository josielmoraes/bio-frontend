import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "forms",
        loadChildren: () => import("./forms/forms.module").then((m) => m.FormsModule),
      },
      {
        path: "dados",
        loadChildren: () => import("./dados/dados.module").then((m) => m.DadosModule),
      },

      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      /* {
      path: '**',
      component: NotFoundComponent,
    },*/
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
