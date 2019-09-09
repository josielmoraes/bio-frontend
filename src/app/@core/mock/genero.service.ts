import { Genero, Subgenero } from "./../data/genero";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class GeneroService {
  constructor(private http: HttpClient) {}

  getListData(): Observable<Genero[]> {
    return this.http.get<Genero[]>("/api/taxonomias/genero");
  }

  insertData(data): Observable<Genero> {
    return this.http.post<Genero>("/api/taxonomias/genero/create", data);
  }

  deleteData(id): Observable<Genero> {
    return this.http.delete<Genero>(`/api/taxonomias/genero/${id}/delete`);
  }

  updateData(id, data): Observable<Genero> {
    return this.http.put<Genero>(`/api/taxonomias/genero/${id}/update`, data);
  }
}

@Injectable()
export class SubgeneroService {
  constructor(private http: HttpClient) {}

  getListData(): Observable<Subgenero[]> {
    return this.http.get<Subgenero[]>("/api/taxonomias/subgenero");
  }

  insertData(data): Observable<Subgenero> {
    return this.http.post<Subgenero>("/api/taxonomias/subgenero/create", data);
  }

  deleteData(id): Observable<Subgenero> {
    return this.http.delete<Subgenero>(`/api/taxonomias/subgenero/${id}/delete`);
  }

  updateData(id, data): Observable<Subgenero> {
    return this.http.put<Subgenero>(`/api/taxonomias/subgenero/${id}/update`, data);
  }
}
