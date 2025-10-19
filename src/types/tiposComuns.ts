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
