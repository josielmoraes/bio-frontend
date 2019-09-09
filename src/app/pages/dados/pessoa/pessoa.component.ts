import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { takeWhile } from "rxjs/operators";
import { NbToastrService } from "@nebular/theme";
import { DataTableDirective } from "angular-datatables";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import Swal from "sweetalert2";
import { PessoaData } from "../../../@core/data/pessoa";

@Component({
  selector: "ngx-pessoa",
  templateUrl: "./pessoa.component.html",
  styleUrls: ["./pessoa.component.scss"],
})
export class PessoaComponent implements OnInit {
  private model: any;
  private form: FormGroup;
  constructor(private service: PessoaData, private toastrService: NbToastrService, private fb: FormBuilder) {
    this.form = this.fb.group({
      id: "",
      nome_completo: ["", Validators.required],
    });
  }

  ngOnInit() {}

  get f(): any {
    return this.form.controls;
  }
}
