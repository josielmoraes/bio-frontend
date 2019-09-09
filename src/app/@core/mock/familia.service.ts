import { Familia, Subfamilia } from "./../data/familia";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class FamiliaService {
  constructor(private http: HttpClient) {}

  getListData(): Observable<Familia[]> {
    return this.http.get<Familia[]>("/api/taxonomias/familia");
  }

  insertData(data): Observable<Familia> {
    return this.http.post<Familia>("/api/taxonomias/familia/create", data);
  }

  deleteData(id): Observable<Familia> {
    return this.http.delete<Familia>(`/api/taxonomias/familia/${id}/delete`);
  }

  updateData(id, data): Observable<Familia> {
    return this.http.put<Familia>(`/api/taxonomias/familia/${id}/update`, data);
  }
}

@Injectable()
export class SubfamiliaService {
  constructor(private http: HttpClient) {}

  getListData(): Observable<Subfamilia[]> {
    return this.http.get<Subfamilia[]>("/api/taxonomias/subfamilia");
  }

  insertData(data): Observable<Subfamilia> {
    return this.http.post<Subfamilia>("/api/taxonomias/subfamilia/create", data);
  }

  deleteData(id): Observable<Subfamilia> {
    return this.http.delete<Subfamilia>(`/api/taxonomias/subfamilia/${id}/delete`);
  }

  updateData(id, data): Observable<Subfamilia> {
    return this.http.put<Subfamilia>(`/api/taxonomias/subfamilia/${id}/update`, data);
  }
}
