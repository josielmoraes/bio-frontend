import { Especie } from "./../data/especie";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class EspecieService {
  constructor(private http: HttpClient) {}

  getListData(): Observable<Especie[]> {
    return this.http.get<Especie[]>("/api/taxonomias/especie");
  }

  insertData(data): Observable<Especie> {
    return this.http.post<Especie>("/api/taxonomias/especie/create", data);
  }

  deleteData(id): Observable<Especie> {
    return this.http.delete<Especie>(`/api/taxonomias/especie/${id}/delete`);
  }

  updateData(id, data): Observable<Especie> {
    return this.http.put<Especie>(`/api/taxonomias/especie/${id}/update`, data);
  }
}
