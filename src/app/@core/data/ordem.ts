import { Observable } from "rxjs";
import { Classe } from "./classe";

export interface Ordem {
  id: number;
  nome: string;
  classe: Classe;
}

export abstract class OrdemData {
  abstract getListData(): Observable<Ordem[]>;
  abstract insertData(data): Observable<Ordem>;
  abstract updateData(id, data): Observable<Ordem>;
  abstract deleteData(id: number): Observable<Ordem>;
}
