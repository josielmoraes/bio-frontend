import { NgModule } from "@angular/core";
import { NbMenuModule } from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { SweetAlert2Module } from "@sweetalert2/ngx-sweetalert2";

@NgModule({
  imports: [PagesRoutingModule, ThemeModule, NbMenuModule, ReactiveFormsModule, SweetAlert2Module],
  declarations: [PagesComponent],
})
export class PagesModule {}
