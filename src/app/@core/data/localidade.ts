import { Observable } from "rxjs";

export interface Localidade {
  id: number;
  pais: string;
  estado: string;
  cidade: string;
}

export abstract class LocalidadeData {
  abstract getListData(): Observable<Localidade[]>;
  abstract insertData(data): Observable<Localidade>;
  abstract updateData(id, data): Observable<Localidade>;
  abstract deleteData(id: number): Observable<Localidade>;
}
