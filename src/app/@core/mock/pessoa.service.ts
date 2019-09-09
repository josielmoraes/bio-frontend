import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

import { Pessoa } from "../data/pessoa";

@Injectable()
export class PessoaService {
  constructor(private http: HttpClient) {}

  getListData(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>("/api/pessoas");
  }

  insertData(data): Observable<Pessoa> {
    return this.http.post<Pessoa>("/api/pessoas/create", data);
  }

  deleteData(id): Observable<Pessoa> {
    return this.http.delete<Pessoa>(`/api/pessoas/${id}/delete`);
  }

  updateData(id, data): Observable<Pessoa> {
    return this.http.put<Pessoa>(`/api/pessoas/${id}/update`, data);
  }
}
