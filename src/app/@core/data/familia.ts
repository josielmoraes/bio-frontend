import { Observable } from "rxjs";
import { Ordem } from "./ordem";

export interface Familia {
  id: number;
  nome: string;
  ordem: Ordem;
}

export interface Subfamilia {
  id: number;
  nome: string;
  ordem: Familia;
}

export abstract class FamiliaData {
  abstract getListData(): Observable<Familia[]>;
  abstract insertData(data): Observable<Familia>;
  abstract updateData(id, data): Observable<Familia>;
  abstract deleteData(id: number): Observable<Familia>;
}

export abstract class SubfamiliaData {
  abstract getListData(): Observable<Subfamilia[]>;
  abstract insertData(data): Observable<Subfamilia>;
  abstract updateData(id, data): Observable<Subfamilia>;
  abstract deleteData(id: number): Observable<Subfamilia>;
}
