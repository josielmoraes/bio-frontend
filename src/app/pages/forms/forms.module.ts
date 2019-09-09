import { NgModule } from "@angular/core";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbToastrModule,
  NbTreeGridModule,
} from "@nebular/theme";

import { ThemeModule } from "../../@theme/theme.module";
import { FormsRoutingModule } from "./forms-routing.module";
import { FormsComponent } from "./forms.component";

import { ReinoComponent } from "./reino/reino.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DataTablesModule } from "angular-datatables";

import { FiloComponent } from "./filo/filo.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ClasseComponent } from "./classe/classe.component";
import { OrdemComponent } from "./ordem/ordem.component";
import { FamiliaComponent } from "./familia/familia.component";
import { SubfamiliaComponent } from "./subfamilia/subfamilia.component";
import { SupertriboComponent } from "./supertribo/supertribo.component";
import { TriboComponent } from "./tribo/tribo.component";
import { SubtriboComponent } from "./subtribo/subtribo.component";
import { GeneroComponent } from "./genero/genero.component";
import { SubgeneroComponent } from "./subgenero/subgenero.component";
import { EspecieComponent } from "./especie/especie.component";
@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    NbTreeGridModule,
    NbToastrModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgbModule,
  ],
  declarations: [
    FormsComponent,
    ReinoComponent,
    FiloComponent,
    ClasseComponent,
    OrdemComponent,
    FamiliaComponent,
    SubfamiliaComponent,
    SupertriboComponent,
    TriboComponent,
    SubtriboComponent,
    GeneroComponent,
    SubgeneroComponent,
    EspecieComponent,
  ],
})
export class FormsModule {}
