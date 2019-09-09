import { Especie, EspecieData } from "./../../../@core/data/especie";
import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { NbToastrService } from "@nebular/theme";
import { DataTableDirective } from "angular-datatables";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, map, takeWhile } from "rxjs/operators";
import Swal from "sweetalert2";
import { Subject } from "rxjs";
import { GeneroData, SubgeneroData } from "../../../@core/data/genero";
import { EnderecoData } from "../../../@core/data/endereco";
import { LocalidadeData } from "../../../@core/data/localidade";

@Component({
  selector: "ngx-endereco",
  templateUrl: "./endereco.component.html",
  styleUrls: ["./endereco.component.scss"],
})
export class EnderecoComponent implements OnInit {
  public form: FormGroup;
  public alive = true;
  public submitted: boolean;
  public model: any;
  public localidades: any[] = [];
  constructor(
    private localidadeService: LocalidadeData,
    private service: EnderecoData,
    private toastrService: NbToastrService,
    private fb: FormBuilder,
  ) {
    this.localidadeService
      .getListData()
      .pipe(takeWhile((): boolean => this.alive))
      .subscribe((data): void => {
        this.localidades = data;
      });

    this.form = this.fb.group({
      id: "",
      localidade: ["", Validators.required],
    });
  }

  ngOnInit() {}

  get f(): any {
    return this.form.controls;
  }
  search = (text$: Observable<string>): any =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length >= 3
          ? []
          : this.localidades
              .filter((v) => {
                if (
                  v.pais.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
                  v.estado.toLowerCase().indexOf(term.toLowerCase()) > -1
                ) {
                  return v;
                }
              })
              .slice(0, 10),
      ),
    );
  formatter = (x: { pais: string; estado: string; cidade: string }): string => x.pais + " " + x.estado + " " + x.cidade;
}
