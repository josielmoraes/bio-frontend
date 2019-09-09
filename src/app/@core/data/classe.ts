import { Observable } from "rxjs";
import { Filo } from "./filo";

export interface Classe {
  id: number;
  nome: string;
  filo: Filo;
}

export abstract class ClasseData {
  abstract getListData(): Observable<Classe[]>;
  abstract insertData(data): Observable<Classe>;
  abstract updateData(id, data): Observable<Classe>;
  abstract deleteData(id: number): Observable<Classe>;
}
