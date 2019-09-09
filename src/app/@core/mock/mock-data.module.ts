import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";

const SERVICES = [
  //UserService,
];

@NgModule({
  imports: [CommonModule],
  providers: [...SERVICES],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: MockDataModule,
      providers: [...SERVICES],
    };
  }
}
