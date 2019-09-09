import { LocalidadeService } from "./mock/localidade.service";
import { EspecieService } from "./mock/especie.service";
import { GeneroService, SubgeneroService } from "./mock/genero.service";
import { FamiliaService, SubfamiliaService } from "./mock/familia.service";
import { TriboService, SubtriboService, SupertriboService } from "./mock/tribo.service";
import { ClasseService } from "./mock/classe.service";
import { FiloService } from "./mock/filo.service";
import { ReinoService } from "./mock/reino.service";
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NbAuthModule, NbDummyAuthStrategy } from "@nebular/auth";
import { NbSecurityModule, NbRoleProvider } from "@nebular/security";
import { of as observableOf } from "rxjs";

import { throwIfAlreadyLoaded } from "./module-import-guard";
import { AnalyticsService, LayoutService, PlayerService, StateService } from "./utils";

import { MockDataModule } from "./mock/mock-data.module";
import { ReinoData } from "./data/reino";
import { FiloData } from "./data/filo";
import { ClasseData } from "./data/classe";
import { OrdemData } from "./data/ordem";
import { OrdemService } from "./mock/ordem.service";
import { FamiliaData, SubfamiliaData } from "./data/familia";
import { TriboData, SubtriboData, SupertriboData } from "./data/tribo";
import { GeneroData, SubgeneroData } from "./data/genero";
import { EspecieData } from "./data/especie";
import { LocalidadeData } from "./data/localidade";
import { EnderecoData } from "./data/endereco";
import { EnderecoService } from "./mock/endereco.service";
import { PessoaData } from "./data/pessoa";
import { PessoaService } from "./mock/pessoa.service";

const socialLinks = [
  {
    url: "https://github.com/akveo/nebular",
    target: "_blank",
    icon: "github",
  },
  {
    url: "https://www.facebook.com/akveo/",
    target: "_blank",
    icon: "facebook",
  },
  {
    url: "https://twitter.com/akveo_inc",
    target: "_blank",
    icon: "twitter",
  },
];

const DATA_SERVICES = [
  { provide: ReinoData, useClass: ReinoService },
  { provide: FiloData, useClass: FiloService },
  { provide: ClasseData, useClass: ClasseService },
  { provide: OrdemData, useClass: OrdemService },
  { provide: FamiliaData, useClass: FamiliaService },
  { provide: SubfamiliaData, useClass: SubfamiliaService },
  { provide: TriboData, useClass: TriboService },
  { provide: SubtriboData, useClass: SubtriboService },
  { provide: SupertriboData, useClass: SupertriboService },
  { provide: GeneroData, useClass: GeneroService },
  { provide: SubgeneroData, useClass: SubgeneroService },
  { provide: EspecieData, useClass: EspecieService },
  { provide: LocalidadeData, useClass: LocalidadeService },
  { provide: EnderecoData, useClass: EnderecoService },
  { provide: PessoaData, useClass: PessoaService },
];
export class NbSimpleRoleProvider extends NbRoleProvider {
  getRole() {
    // here you could provide any role based on any auth flow
    return observableOf("guest");
  }
}

export const NB_CORE_PROVIDERS = [
  ...MockDataModule.forRoot().providers,
  ...DATA_SERVICES,
  ...NbAuthModule.forRoot({
    strategies: [
      NbDummyAuthStrategy.setup({
        name: "email",
        delay: 3000,
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers,

  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: "*",
      },
      user: {
        parent: "guest",
        create: "*",
        edit: "*",
        remove: "*",
      },
    },
  }).providers,

  {
    provide: NbRoleProvider,
    useClass: NbSimpleRoleProvider,
  },
  AnalyticsService,
  LayoutService,
  PlayerService,
  StateService,
];

@NgModule({
  imports: [CommonModule],
  exports: [NbAuthModule],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, "CoreModule");
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [...NB_CORE_PROVIDERS],
    };
  }
}
