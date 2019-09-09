import { Observable } from "rxjs";
import { Familia, Subfamilia } from "./familia";

export interface Supertribo {
  id: number;
  nome: string;
  familia: Familia;
  subfamilia: Subfamilia;
}

export interface Tribo {
  id: number;
  nome: string;
  supertribo: Supertribo;
  familia: Familia;
  subfamilia: Subfamilia;
}

export interface Subtribo {
  id: number;
  nome: string;
  sbtribo: Tribo;
}

export abstract class SupertriboData {
  abstract getListData(): Observable<Supertribo[]>;
  abstract insertData(data): Observable<Supertribo>;
  abstract updateData(id, data): Observable<Supertribo>;
  abstract deleteData(id: number): Observable<Supertribo>;
}

export abstract class TriboData {
  abstract getListData(): Observable<Tribo[]>;
  abstract insertData(data): Observable<Tribo>;
  abstract updateData(id, data): Observable<Tribo>;
  abstract deleteData(id: number): Observable<Tribo>;
}

export abstract class SubtriboData {
  abstract getListData(): Observable<Subtribo[]>;
  abstract insertData(data): Observable<Subtribo>;
  abstract updateData(id, data): Observable<Subtribo>;
  abstract deleteData(id: number): Observable<Subtribo>;
}
