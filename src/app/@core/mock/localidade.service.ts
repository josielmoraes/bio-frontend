import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Localidade } from "../data/localidade";

@Injectable()
export class LocalidadeService {
  constructor(private http: HttpClient) {}

  getListData(): Observable<Localidade[]> {
    return this.http.get<Localidade[]>("/api/localidades");
  }

  insertData(data): Observable<Localidade> {
    return this.http.post<Localidade>("/api/localidades/create", data);
  }

  deleteData(id): Observable<Localidade> {
    return this.http.delete<Localidade>(`/api/localidades/${id}/delete`);
  }

  updateData(id, data): Observable<Localidade> {
    return this.http.put<Localidade>(`/api/localidades/${id}/update`, data);
  }
}
