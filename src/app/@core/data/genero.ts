import { Observable } from "rxjs";
import { Familia } from "./familia";
import { Subtribo, Tribo } from "./tribo";

export interface Genero {
  id: number;
  nome: string;
  familia: Familia;
  subtribo: Subtribo;
  tribo: Tribo;
}

export interface Subgenero {
  id: number;
  nome: string;
  genero: Genero;
}

export abstract class GeneroData {
  abstract getListData(): Observable<Genero[]>;
  abstract insertData(data): Observable<Genero>;
  abstract updateData(id, data): Observable<Genero>;
  abstract deleteData(id: number): Observable<Genero>;
}

export abstract class SubgeneroData {
  abstract getListData(): Observable<Subgenero[]>;
  abstract insertData(data): Observable<Subgenero>;
  abstract updateData(id, data): Observable<Subgenero>;
  abstract deleteData(id: number): Observable<Subgenero>;
}
