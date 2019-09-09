import { Observable } from "rxjs";

export interface Reino {
  id: number;
  nome: string;
}

export abstract class ReinoData {
  abstract getListData(): Observable<Reino[]>;
  abstract insertData(data): Observable<Reino>;
  abstract updateData(id, data): Observable<Reino>;
  abstract deleteData(id: number): Observable<Reino>;
}
