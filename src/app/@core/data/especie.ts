import { Genero } from "./genero";
import { Observable } from "rxjs";

export interface Especie {
  id: number;
  nome: string;
  genero: Genero;
  e_sinonimo: boolean;
  parent_id_especie: Especie;
}

export abstract class EspecieData {
  abstract getListData(): Observable<Especie[]>;
  abstract insertData(data): Observable<Especie>;
  abstract updateData(id, data): Observable<Especie>;
  abstract deleteData(id: number): Observable<Especie>;
}
