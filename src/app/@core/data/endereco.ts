import { Localidade } from "./localidade";
import { Observable } from "rxjs";

export interface Endereco {
  id: number;
  bairro: string;
  logradouro: string;
  localidade: Localidade;
}

export abstract class EnderecoData {
  abstract getListData(): Observable<Endereco[]>;
  abstract insertData(data): Observable<Endereco>;
  abstract updateData(id, data): Observable<Endereco>;
  abstract deleteData(id: number): Observable<Endereco>;
}
