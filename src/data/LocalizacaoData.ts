import { connection } from "../dbConnection";
import { exames } from "../types/tiposComuns";

export class LocalizacaoData {
  buscarLocalizacaoPorParametros = async (exame: string): Promise<exames[]> => {
    try {
      const exames = connection()
        .select("*")
        .from("exame")
        .where("nome", exame);
      return exames;
    } catch (err: any) {
      throw new Error(err);
    }
  };
}
