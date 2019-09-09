import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

import { Instituicao } from "../data/instituicao";

@Injectable()
export class InstituicaoService {
  constructor(private http: HttpClient) {}

  getListData(): Observable<Instituicao[]> {
    return this.http.get<Instituicao[]>("/api/instituicoes");
  }

  insertData(data): Observable<Instituicao> {
    return this.http.post<Instituicao>("/api/instituicoes/create", data);
  }

  deleteData(id): Observable<Instituicao> {
    return this.http.delete<Instituicao>(`/api/instituicoes/${id}/delete`);
  }

  updateData(id, data): Observable<Instituicao> {
    return this.http.put<Instituicao>(`/api/instituicoes/${id}/update`, data);
  }
}
