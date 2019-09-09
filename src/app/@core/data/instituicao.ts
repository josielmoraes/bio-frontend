import { Observable } from "rxjs";
import { Endereco } from "./endereco";
import { Localidade } from "./localidade";

export interface Instituicao {
  id: number;
  nome: string;
  telefone: string;
  website: string;
  redes_sociais: string;
  fax: string;
  endereco: string;
  anotacao: string;
  acronimo: string;
  localidade: Localidade;
  id_endereco: Endereco;
}

export abstract class InstituicaoData {
  abstract getListData(): Observable<Instituicao[]>;
  abstract insertData(data): Observable<Instituicao>;
  abstract updateData(id, data): Observable<Instituicao>;
  abstract deleteData(id: number): Observable<Instituicao>;
}
