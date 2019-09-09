import { Ordem } from "./../data/ordem";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class OrdemService {
  constructor(private http: HttpClient) {}

  getListData(): Observable<Ordem[]> {
    return this.http.get<Ordem[]>("/api/taxonomias/ordem");
  }

  insertData(data): Observable<Ordem> {
    return this.http.post<Ordem>("/api/taxonomias/ordem/create", data);
  }

  deleteData(id): Observable<Ordem> {
    return this.http.delete<Ordem>(`/api/taxonomias/ordem/${id}/delete`);
  }

  updateData(id, data): Observable<Ordem> {
    return this.http.put<Ordem>(`/api/taxonomias/ordem/${id}/update`, data);
  }
}
