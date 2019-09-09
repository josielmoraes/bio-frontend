import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { takeWhile } from "rxjs/operators";
import { NbToastrService } from "@nebular/theme";
import { DataTableDirective } from "angular-datatables";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ReinoData, Reino } from "../../../@core/data/reino";
import { Subject } from "rxjs";
import Swal from "sweetalert2";

@Component({
  selector: "ngx-reino",
  templateUrl: "./reino.component.html",
  styleUrls: ["./reino.component.scss"],
})
export class ReinoComponent implements AfterViewInit, OnDestroy, OnInit {
  public submitted: boolean;

  public alive = true;
  public reinos: any[];
  public reino: Reino;
  public reinoForm: FormGroup;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  constructor(private service: ReinoData, private toastrService: NbToastrService, private fb: FormBuilder) {
    this.reinoForm = this.fb.group({
      id: "",
      nome: ["", Validators.required],
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
        this.reinos = data;
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
    return this.reinoForm.controls;
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
    if (this.reinoForm.invalid) {
      return;
    }
    const id = this.reinoForm.value.id;
    if (id > 0) {
      this.service.updateData(id, this.reinoForm.value).subscribe(
        (): void => {
          this.toastrService.show("Atualizado com sucesso!", "OK", { status: "success" });
          this.submitted = false;
          this.reinoForm.reset();
          this.find();
        },
        (err): void => {
          this.toastrService.show(err.error.message, "Erro", { status: "danger" });
        },
      );
    } else {
      this.reinoForm.value.id = null;
      this.service.insertData(this.reinoForm.value).subscribe(
        (): void => {
          this.toastrService.show("Cadastrado com sucesso!", "OK", { status: "success" });
          this.submitted = false;
          this.reinoForm.reset();
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
        this.service.deleteData(Number(object.id_reino)).subscribe(
          (): void => {
            Swal.fire("Deletado", "O registro foi delatado", "success");
            this.reinoForm.reset();
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
    this.reino = object;
    this.reinoForm.setValue({
      id: object.id_reino,
      nome: object.nome,
    });
  }
  onReset(): void {
    this.submitted = false;
    this.reinoForm.reset();
  }
}
