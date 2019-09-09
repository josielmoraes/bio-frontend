import { Observable } from "rxjs";
import { Reino } from "./reino";

export interface Filo {
  id: number;
  nome: string;
  reino: Reino;
}

export abstract class FiloData {
  abstract getListData(): Observable<Filo[]>;
  abstract insertData(data): Observable<Filo>;
  abstract updateData(id, data): Observable<Filo>;
  abstract deleteData(id: number): Observable<Filo>;
}
