import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { NbToastrService } from "@nebular/theme";
import { DataTableDirective } from "angular-datatables";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, map, takeWhile } from "rxjs/operators";
import Swal from "sweetalert2";
import { Subject } from "rxjs";
import { Familia, FamiliaData, SubfamiliaData } from "../../../@core/data/familia";

@Component({
  selector: "ngx-subfamilia",
  templateUrl: "./subfamilia.component.html",
  styleUrls: ["./subfamilia.component.scss"],
})
export class SubfamiliaComponent implements AfterViewInit, OnDestroy, OnInit {
  public submitted: boolean;
  public model: any;
  public alive = true;
  public familias: any[] = [];
  public subfamilias: any[] = [];
  public subfamilia: Familia;
  public form: FormGroup;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  constructor(
    private familiaService: FamiliaData,
    private service: SubfamiliaData,
    private toastrService: NbToastrService,
    private fb: FormBuilder,
  ) {
    this.familiaService
      .getListData()
      .pipe(takeWhile((): boolean => this.alive))
      .subscribe((data): void => {
        this.familias = data;
      });

    this.form = this.fb.group({
      id: "",
      nome: ["", Validators.required],
      familia: ["", Validators.required],
    });
  }

  get f(): any {
    return this.form.controls;
  }

  ngOnInit(): any {
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
        this.subfamilias = data;
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

  formatter = (x: { nome: string }): string => x.nome;

  onReset(): void {
    this.submitted = false;
    this.model = "";
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
    this.subfamilia = object;
    this.form.setValue({
      id: object.id_subfamilia,
      nome: object.nome,
      familia: object.familia,
    });
  }

  public async submitHandler(): Promise<any> {
    this.submitted = true;
    if (typeof this.form.value.familia !== "object" || this.form.value.familia == "") {
      this.form.value.familia = null;
      return;
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
        this.service.deleteData(Number(object.id_subfamilia)).subscribe(
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
