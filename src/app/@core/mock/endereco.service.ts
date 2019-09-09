import { Endereco } from "./../data/endereco";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class EnderecoService {
  constructor(private http: HttpClient) {}

  getListData(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>("/api/enderecos");
  }

  insertData(data): Observable<Endereco> {
    return this.http.post<Endereco>("/api/enderecos/create", data);
  }

  deleteData(id): Observable<Endereco> {
    return this.http.delete<Endereco>(`/api/enderecos/${id}/delete`);
  }

  updateData(id, data): Observable<Endereco> {
    return this.http.put<Endereco>(`/api/enderecos/${id}/update`, data);
  }
}
