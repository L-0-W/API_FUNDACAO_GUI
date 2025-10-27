import { connection } from "../dbConnection";
import { bloco, exame, setor } from "../types/tiposComuns";

export class LocalizacaoData {
  buscarExames = async (exame: string): Promise<exame> => {
    try {
      const exames = await connection
        .select("*")
        .from("exames")
        .where("nome", exame)
        .first();
      return exames;
    } catch (err: any) {
      throw new Error(err);
    }
  };

  buscarSetorPorId = async (setorId: number): Promise<setor> => {
    try {
      const setor = await connection()
        .select("*")
        .from("locais")
        .where("id", setorId)
        .first();
      return setor;
    } catch (err: any) {
      throw new Error(err);
    }
  };

  buscarBlocoPorId = async (blocoId: number): Promise<bloco> => {
    try {
      const bloco = await connection()
        .select("*")
        .from("bloco")
        .where("id", blocoId)
        .first();

      return bloco;
    } catch (err: any) {
      throw new Error(err);
    }
  };
}
