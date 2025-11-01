export interface admin {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

export interface setor {
  id: number;
  nome: string;
  tipo: string;
  bloco_id: number;
  andar: string;
  coordenada: string;
  descricao: string;
  ativo: boolean;
}

export interface bloco {
  id: number;
  nome: string;
  coordenada: string;
  descricao: string;
}

interface referencia {
  imagem: string[];
  descricao: string;
}

export interface referencias {
  bloco: referencia;
  setor: referencia;
}

export enum filtragemEventosStatus {
  Concluido = "concluido",
  Em_Andamento = "em_andamento",
  Encerrado = "encerrado",
  Cancelado = "cancelado",
  Vazio = "",
}

export interface filtragemEventos {
  status?: filtragemEventosStatus | string;
  tags?: string | string[];
  dias?: number;
}

export interface local {
  nome?: string;
  bloco?: string;
  setor?: string;
  andar?: string;
  coordenada?: string;
  referencias?: {
    bloco: {
      imagem: string[];
      descricao: string[];
    };
    setor: {
      imagem: string[];
      descricao: string[];
    };
  };
}

export interface evento {
  id?: number;
  titulo?: string;
  descricao?: string;
  data_inicio?: number;
  data_fim?: number;
  status?: string;
  local?: local;
  publico_alvo?: string;
}

export interface noticia_DTO {
  titulo: string;
  resumo: string;
  conteudo: string;
  data_publicacao: number;
  tags?: string[];
  imagens?: string[];
  outros_links?: string[];
}

export interface params_noticia {
  recentes?: number;
  bloco?: string;
  setor?: string;
  exame?: string;
  tags?: string[];
}

export interface exame {
  id: number;
  nome: string;
  descricao: string;
  local_id: number;
}

export enum vagasStatus {
  Ativa,
  Encerrada,
}
export enum vagasVinculo {
  CLT,
  PJ,
  ESTAGIO,
}

export interface vagasEmprego {
  id?: number;
  cargo?: string;
  resumo?: string;
  descricao?: string;
  requisitos?: string;
  data_publicacao?: number;
  data_encerramente?: number;
  status?: vagasStatus;
  como_se_inscrever?: string;
  tipo_vinculo?: vagasVinculo;
}
