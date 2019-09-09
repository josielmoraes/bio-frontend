import { Localidade, LocalidadeData } from "./../../../@core/data/localidade";
import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { takeWhile } from "rxjs/operators";
import { NbToastrService } from "@nebular/theme";
import { DataTableDirective } from "angular-datatables";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import Swal from "sweetalert2";

@Component({
  selector: "ngx-localidade",
  templateUrl: "./localidade.component.html",
  styleUrls: ["./localidade.component.scss"],
})
export class LocalidadeComponent implements AfterViewInit, OnDestroy, OnInit {
  public submitted: boolean;

  public alive = true;
  public localidades: any[];
  public localidade: Localidade;
  public form: FormGroup;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  constructor(private service: LocalidadeData, private toastrService: NbToastrService, private fb: FormBuilder) {
    this.form = this.fb.group({
      id: "",
      pais: ["", Validators.required],
      estado: ["", Validators.required],
      cidade: ["", Validators.required],
    });
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
        this.localidades = data;
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

  get f(): any {
    return this.form.controls;
  }
  private optionData(): void {
    this.dtOptions = {
      pagingType: "full_numbers",
      responsive: true,
      autoWidth: false,
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

  public async submitHandler(): Promise<any> {
    this.submitted = true;
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
        this.service.deleteData(Number(object.id_localidade)).subscribe(
          (): void => {
            Swal.fire("Deletado", "O registro foi delatado", "success");
            this.onReset();
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

  public edit(object): void {
    console.log(object);
    this.localidade = object;
    this.form.setValue({
      id: object.id_localidade,
      pais: object.pais,
      cidade: object.cidade,
      estado: object.estado,
    });
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
