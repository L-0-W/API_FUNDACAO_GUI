import {
  evento,
  exame,
  noticia_DTO,
  referencias,
  setor,
  vagasEmprego,
  bloco,
} from "./tiposComuns";

export interface localizacaoAPIretorno {
  exames?: exame[];
  setor?: setor[];
  bloco?: bloco[];
  andar?: string;
  coordenada?: string;
  referencias?: referencias;
}

export interface eventosAPIretorno {
  eventos?: evento[];
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
