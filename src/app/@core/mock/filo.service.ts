import { Filo } from "./../data/filo";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

@Injectable()
export class FiloService {
  constructor(private http: HttpClient) {}

  getListData(): Observable<Filo[]> {
    return this.http.get<Filo[]>("/api/taxonomias/filo");
  }

  insertData(data): Observable<Filo> {
    return this.http.post<Filo>("/api/taxonomias/filo/create", data);
  }

  deleteData(id): Observable<Filo> {
    return this.http.delete<Filo>(`/api/taxonomias/filo/${id}/delete`);
  }

  updateData(id, data): Observable<Filo> {
    return this.http.put<Filo>(`/api/taxonomias/filo/${id}/update`, data);
  }
}
