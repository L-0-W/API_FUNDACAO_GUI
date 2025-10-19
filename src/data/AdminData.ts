import { connection } from "../dbConnection";

export class AdminData {
  deletarExamePorId = async (id: number): Promise<number> => {
    try {
      const exame = await connection
        .select("id")
        .from("exames")
        .where({ id: id })
        .first();

      if (!exame) {
        return 0;
      }

      await connection("exames").where({ id: id }).del();

      return 1;
    } catch (err: any) {
      throw new Error(err);
    }
  };
}
