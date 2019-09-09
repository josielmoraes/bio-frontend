import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

import { Reino, ReinoData } from "../data/reino";

@Injectable()
export class ReinoService {
  constructor(private http: HttpClient) {}

  getListData(): Observable<Reino[]> {
    return this.http.get<Reino[]>("/api/taxonomias/reino");
  }

  insertData(data): Observable<Reino> {
    return this.http.post<Reino>("/api/taxonomias/reino/create", data);
  }

  deleteData(id): Observable<Reino> {
    return this.http.delete<Reino>(`/api/taxonomias/reino/${id}/delete`);
  }

  updateData(id, data): Observable<Reino> {
    return this.http.put<Reino>(`/api/taxonomias/reino/${id}/update`, data);
  }
}
