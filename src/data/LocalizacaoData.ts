import { connection } from "../dbConnection";
import { exame } from "../types/tiposComuns";

export class LocalizacaoData {
  pegarExamePorID = async (id: number): Promise<exame | undefined> => {
    try {
      const exame = await connection
        .select("nome", "descricao")
        .from<exame>("exames")
        .where("id", id)
        .first();

      return exame;
    } catch (err: any) {
      throw new Error(err);
    }
  };

  pegarExamePorNome = async (nome: string): Promise<exame[]> => {
    try {
      const exame = await connection
        .select("nome", "descricao")
        .from<exame>("exames")
        .where("nome", nome);

      return exame;
    } catch (err: any) {
      throw new Error(err);
    }
  };
}
