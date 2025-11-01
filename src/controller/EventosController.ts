import { Request, Response } from "express";
import { ResponseBuilder } from "../ResponseBuilder";
import { EventosBusiness } from "../business/EventosBusiness";
import { eventosAPIretorno } from "../types/tiposRetorno";

export class EventosController {
  private eventosBusiness = new EventosBusiness();
  private responseBuilder = new ResponseBuilder<eventosAPIretorno>();

  buscarTodosEventos = async (req: Request, res: Response) => {
    try {
      await this.eventosBusiness.obterTodosEventos(this.responseBuilder);
      this.responseBuilder.build(res);
    } catch (err: any) {
      this.responseBuilder.adicionarCodigoStatus(
        this.responseBuilder.STATUS_CODE_SERVER_ERROR,
      );

      this.responseBuilder.adicionarMensagem(err.sqlMessage || err.message);
      this.responseBuilder.build(res);
    }
  };

  buscarEventosPorQuery = async (req: Request, res: Response) => {
    try {
      const { status, dias } = req.query;

      if (!status && !dias) {
        this.responseBuilder.adicionarCodigoStatus(
          this.responseBuilder.STATUS_CODE_BAD_REQUEST,
        );
        this.responseBuilder.adicionarMensagem(
          "E Obrigatorio inserir pelo menos 1 dos filtros para pesquisa",
        );
        this.responseBuilder.build(res);

        return;
      }

      const filtros = [];

      status ? filtros.push(status.toString()) : undefined;
      dias ? filtros.push(dias.toString()) : undefined;

      await this.eventosBusiness.obterEventosPorFiltragem(
        filtros,
        this.responseBuilder,
      );
    } catch (err: any) {
      this.responseBuilder.adicionarCodigoStatus(
        this.responseBuilder.STATUS_CODE_SERVER_ERROR,
      );

      this.responseBuilder.adicionarMensagem(err.sqlMessage || err.message);
      this.responseBuilder.build(res);
    }
  };

  pegarEventoPorId = async (req: Request, res: Response) => {
    try {
      const eventoId = Number(req.params.id);

      if (isNaN(eventoId) || !Number.isInteger(eventoId)) {
        this.responseBuilder.adicionarCodigoStatus(
          this.responseBuilder.STATUS_CODE_BAD_REQUEST,
        );

        this.responseBuilder.adicionarMensagem(
          "O parametro 'id' precisa ser um numero inteiro!",
        );

        this.responseBuilder.build(res);
        return;
      }

      await this.eventosBusiness.obterEventoPorId(
        eventoId,
        this.responseBuilder,
      );

      this.responseBuilder.build(res);
    } catch (err: any) {
      this.responseBuilder.adicionarCodigoStatus(
        this.responseBuilder.STATUS_CODE_SERVER_ERROR,
      );

      this.responseBuilder.adicionarMensagem(err.sqlMessage || err.message);
      this.responseBuilder.build(res);
    }
  };
}
