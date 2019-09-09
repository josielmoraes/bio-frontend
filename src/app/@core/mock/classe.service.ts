import { Classe } from "./../data/classe";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ClasseService {
  constructor(private http: HttpClient) {}

  getListData(): Observable<Classe[]> {
    return this.http.get<Classe[]>("/api/taxonomias/classe");
  }

  insertData(data): Observable<Classe> {
    return this.http.post<Classe>("/api/taxonomias/classe/create", data);
  }

  deleteData(id): Observable<Classe> {
    return this.http.delete<Classe>(`/api/taxonomias/classe/${id}/delete`);
  }

  updateData(id, data): Observable<Classe> {
    return this.http.put<Classe>(`/api/taxonomias/classe/${id}/update`, data);
  }
}
