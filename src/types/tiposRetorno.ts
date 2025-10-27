import {
  exame,
  noticia_DTO,
  referencias,
  setor,
  vagasEmprego,
} from "./tiposComuns";

export interface localizacaoAPIretorno {
  exames?: exame[];
  setor?: setor[];
  bloco?: string;
  andar?: string;
  coordenada?: string;
  referencias?: referencias;
}

export interface noticiaAPIretorno {
  noticias?: noticia_DTO[];
}

export interface vagasAPIretorno {
  vagas?: vagasEmprego[];
}

export interface apiRetorno<T> {
  codigoStatus?: number;
  mensagem?: string;
  existe?: boolean;
  total?: number;
  body?: T;
}
