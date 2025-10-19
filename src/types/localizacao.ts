import { exame, referencias, setor } from "./tiposComuns";

export interface localizacaoAPIretorno {
  codigoStatus?: number;
  mensagemErro?: string;
  existe?: boolean;
  exames?: exame[];
  setor?: setor[];
  bloco?: string;
  andar?: string;
  coordenada?: string;
  referencias?: referencias;
}
