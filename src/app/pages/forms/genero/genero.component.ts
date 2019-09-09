import { Genero, GeneroData } from "./../../../@core/data/genero";
import { TriboData, SubtriboData } from "./../../../@core/data/tribo";
import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { NbToastrService } from "@nebular/theme";
import { DataTableDirective } from "angular-datatables";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, map, takeWhile } from "rxjs/operators";
import Swal from "sweetalert2";
import { Subject } from "rxjs";
import { FamiliaData } from "../../../@core/data/familia";

@Component({
  selector: "ngx-genero",
  templateUrl: "./genero.component.html",
  styleUrls: ["./genero.component.scss"],
})
export class GeneroComponent implements AfterViewInit, OnDestroy, OnInit {
  public submitted: boolean;
  public model: any;
  modelTribo: any;
  public modelSub: any;
  public modelSupetribo: any;
  public alive = true;
  public familias: any[] = [];
  public subtribos: any[] = [];
  public tribos: any[] = [];
  public generos: any[] = [];
  public genero: Genero;
  public form: FormGroup;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  constructor(
    private familiaService: FamiliaData,
    private triboService: TriboData,
    private subriboService: SubtriboData,
    private service: GeneroData,
    private toastrService: NbToastrService,
    private fb: FormBuilder,
  ) {
    this.triboService
      .getListData()
      .pipe(takeWhile((): boolean => this.alive))
      .subscribe((data): void => {
        this.tribos = data;
      });

    this.familiaService
      .getListData()
      .pipe(takeWhile((): boolean => this.alive))
      .subscribe((data): void => {
        this.familias = data;
      });
    this.subriboService
      .getListData()
      .pipe(takeWhile((): boolean => this.alive))
      .subscribe((data): void => {
        this.subtribos = data;
      });

    this.form = this.fb.group({
      id: "",
      nome: ["", Validators.required],
      familia: ["", Validators.required],
      tribo: "",
      subtribo: null,
    });
  }

  get f(): any {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.optionData();
    this.find();
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  public find(): void {
    this.service
      .getListData()
      .pipe(takeWhile((): boolean => this.alive))
      .subscribe((data): void => {
        this.generos = data;
        this.rerender();
      });
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  public ngOnDestroy(): void {
    this.alive = false;
    this.dtTrigger.unsubscribe();
  }

  search = (text$: Observable<string>): any =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length == 0
          ? []
          : this.familias.filter((v) => v.nome.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
    );

  searchTribo = (text$: Observable<string>): any =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      map((term) =>
        term.length == 0
          ? []
          : this.tribos.filter((v) => v.nome.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
    );

  searchsubtribo = (text$: Observable<string>): any =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length == 0
          ? []
          : this.subtribos.filter((v) => v.nome.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
      ),
    );

  formatter = (x: { nome: string }): string => x.nome;

  onReset(): void {
    this.submitted = false;
    this.model = "";
    this.modelTribo = "";
    this.modelSub = "";
    this.form.reset();
  }

  private optionData(): void {
    this.dtOptions = {
      pagingType: "full_numbers",
      responsive: true,
      autoWidth: false,
      processing: true,
      language: {
        processing: "Processando...",
        search: "Buscar:",
        lengthMenu: "_MENU_ resultados por página",
        info: "Mostrando de _START_ até _END_ de _TOTAL_ registros",
        infoEmpty: "Mostrando 0 até 0 de 0 registros",
        infoFiltered: "(Filtrados de _MAX_ registros)",
        infoPostFix: "",
        loadingRecords: "Carregando...",
        zeroRecords: "Nenhum registro encontrado",
        emptyTable: "Nenhum registro encontrado",
        paginate: {
          first: "Primeiro",
          previous: "Anterior",
          next: "Próximo",
          last: "Último",
        },
        aria: {
          sortAscending: ": Ordenar colunas de forma ascendente",
          sortDescending: ": Ordenar colunas de forma descendente",
        },
      },
    };
  }

  public edit(object): void {
    this.genero = object;

    this.form.setValue({
      id: object.id_genero,
      nome: object.nome,
      familia: object.familia,
      tribo: object.tribo,
      subtribo: object.subtribo,
    });
  }

  public async submitHandler(): Promise<any> {
    this.submitted = true;

    if (typeof this.form.value.familia !== "object" || this.form.value.familia == "") {
      this.form.value.familia = null;
    }

    if (typeof this.form.value.tribo !== "object" || this.form.value.tribo == "") {
      this.form.value.tribo = null;
    }
    if (typeof this.form.value.subtribo !== "object" || this.form.value.subtribo != "") {
      this.form.value.subtribo = null;
    }

    if (this.form.invalid) {
      return;
    }
    const id = this.form.value.id;
    if (id > 0) {
      this.service.updateData(id, this.form.value).subscribe(
        (): void => {
          this.toastrService.show("Atualizado com sucesso!", "OK", { status: "success" });
          this.submitted = false;
          this.form.reset();
          this.find();
        },
        (err): void => {
          this.toastrService.show(err.error.message, "Erro", { status: "danger" });
        },
      );
    } else {
      this.form.value.id = null;

      this.service.insertData(this.form.value).subscribe(
        (): void => {
          this.toastrService.show("Cadastrado com sucesso!", "OK", { status: "success" });
          this.submitted = false;
          this.form.reset();
          this.find();
        },
        (err): void => {
          this.toastrService.show(err.error.message, "Erro", { status: "danger" });
        },
      );
    }
  }
  public delete(object): void {
    Swal.fire({
      title: "Tem certeza deletar registro",
      //text: 'You will not be able to recover this imaginary file!',
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "não",
    }).then((result) => {
      if (result.value) {
        this.service.deleteData(Number(object.id_genero)).subscribe(
          (): void => {
            Swal.fire("Deletado", "O registro foi delatado", "success");
            this.form.reset();
            this.find();
          },
          (err): void => {
            Swal.fire("Cancelado", err.error.message, "error");
            this.find();
          },
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "O registro não foi deletado)", "error");
      }
    });
  }
}
