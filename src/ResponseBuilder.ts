import { Response } from "express";
import { localizacaoAPIretorno } from "./types/localizacao";
import { exame } from "./types/tiposComuns";

export class ResponseBuilder {
  public readonly STATUS_CODE_OK: number = 200;
  public readonly STATUS_CODE_VAZIO: number = 404;
  public readonly STATUS_CODE_BAD_REQUEST = 400;
  public readonly STATUS_CODE_SERVER_ERROR = 500;
  public readonly STATUS_CODE_NAO_AUTORIZADO = 401;

  private retorno: localizacaoAPIretorno = {};

  public adicionarExames(exames: exame[]) {
    this.retorno.exames = exames;

    return;
  }

  public adicionarExame(exames: exame) {
    this.retorno.exames = [exames];

    return;
  }

  public adicionarCodigoStatus(status: number) {
    this.retorno.codigoStatus = status;

    return;
  }

  public adicionarMensagem(msg: string) {
    this.retorno.mensagem = msg;

    return;
  }

  public build(res: Response) {
    res.status(this.retorno.codigoStatus || 500).json(this.retorno);
  }
}
