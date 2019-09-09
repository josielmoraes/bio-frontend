import { Observable } from "rxjs";
import { Endereco } from "./endereco";
import { Instituicao } from "./instituicao";

export interface Pessoa {
  id: number;
  nome_curto: string;
  apelido: string;
  nome_completo: string;
  abreviacao_sobrenome: string;
  nacionalidade: string;
  email: string;
  telefone: string;
  instituicao: string;
  cargo: string;
  telefone_de_trabalho: string;
  anotacao: string;
  endereco: Endereco;
  id_instituicao: Instituicao;
}

export abstract class PessoaData {
  abstract getListData(): Observable<Pessoa[]>;
  abstract insertData(data): Observable<Pessoa>;
  abstract updateData(id, data): Observable<Pessoa>;
  abstract deleteData(id: number): Observable<Pessoa>;
}
