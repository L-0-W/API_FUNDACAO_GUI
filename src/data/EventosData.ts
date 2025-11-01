import { connection } from "../dbConnection";
import { evento, filtragemEventos } from "../types/tiposComuns";

export class EventosData {
  buscarTodosEventos = async (): Promise<evento[]> => {
    try {
      const eventos = await connection("eventos").select("*");
      return eventos;
    } catch (err: any) {
      throw new Error(err);
    }
  };
  buscarEventosPorId = async (eventoId: number): Promise<evento> => {
    try {
      const evento = await connection
        .select("*")
        .from("eventos")
        .where("id", eventoId)
        .first();

      return evento;
    } catch (err: any) {
      throw new Error(err);
    }
  };
  buscarEventoPorFiltro = (filtros: string[]) => {
    try {
    } catch (err: any) {
      throw new Error(err);
    }
  };
}
