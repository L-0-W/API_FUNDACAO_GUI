export interface admin {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

export interface exame {
  nome: string;
  descricao: string;
}

export interface setor {
  nome: string;
  descricao: string;
  andar: string;
  coordenadas: string;
}

interface referencia {
  imagem: string[];
  descricao: string;
}

export interface referencias {
  bloco: referencia;
  setor: referencia;
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
