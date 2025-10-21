import { exame, noticia_DTO, referencias, setor } from "./tiposComuns";

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

export interface apiRetorno<T> {
  codigoStatus?: number;
  mensagem?: string;
  existe?: boolean;
  total?: number;
  body?: T;
}
