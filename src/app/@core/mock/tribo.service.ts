import { Subtribo, Supertribo, Tribo } from "./../data/tribo";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class TriboService {
  constructor(private http: HttpClient) {}

  getListData(): Observable<Tribo[]> {
    return this.http.get<Tribo[]>("/api/taxonomias/tribo");
  }

  insertData(data): Observable<Tribo> {
    return this.http.post<Tribo>("/api/taxonomias/tribo/create", data);
  }

  deleteData(id): Observable<Tribo> {
    return this.http.delete<Tribo>(`/api/taxonomias/tribo/${id}/delete`);
  }

  updateData(id, data): Observable<Tribo> {
    return this.http.put<Tribo>(`/api/taxonomias/tribo/${id}/update`, data);
  }
}

@Injectable()
export class SupertriboService {
  constructor(private http: HttpClient) {}

  getListData(): Observable<Supertribo[]> {
    return this.http.get<Supertribo[]>("/api/taxonomias/supertribo");
  }

  insertData(data): Observable<Supertribo> {
    return this.http.post<Supertribo>("/api/taxonomias/supertribo/create", data);
  }

  deleteData(id): Observable<Supertribo> {
    return this.http.delete<Supertribo>(`/api/taxonomias/supertribo/${id}/delete`);
  }

  updateData(id, data): Observable<Supertribo> {
    return this.http.put<Supertribo>(`/api/taxonomias/supertribo/${id}/update`, data);
  }
}

@Injectable()
export class SubtriboService {
  constructor(private http: HttpClient) {}

  getListData(): Observable<Subtribo[]> {
    return this.http.get<Subtribo[]>("/api/taxonomias/subtribo");
  }

  insertData(data): Observable<Subtribo> {
    return this.http.post<Subtribo>("/api/taxonomias/subtribo/create", data);
  }

  deleteData(id): Observable<Subtribo> {
    return this.http.delete<Subtribo>(`/api/taxonomias/subtribo/${id}/delete`);
  }

  updateData(id, data): Observable<Subtribo> {
    return this.http.put<Subtribo>(`/api/taxonomias/subtribo/${id}/update`, data);
  }
}
