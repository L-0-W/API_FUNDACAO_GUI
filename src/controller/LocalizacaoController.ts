import { Request, Response } from "express";
import { ResponseBuilder } from "../ResponseBuilder";
import { LocalizacaoBusiness } from "../business/LocalizacaoBusiness";
import { localizacaoAPIretorno } from "../types/tiposRetorno";

export class LocalizacaoController {
  private localizacaoBusiness = new LocalizacaoBusiness();
  private responseBuilder = new ResponseBuilder<localizacaoAPIretorno>();

  buscarLocalizacaoPorParametros = async (req: Request, res: Response) => {
    try {
      const { exame } = req.query;

      if (!exame || exame.toString().trim().length === 0) {
        this.responseBuilder.adicionarCodigoStatus(
          this.responseBuilder.STATUS_CODE_BAD_REQUEST,
        );

        this.responseBuilder.adicionarMensagem(
          "Parametro 'exame' esta incorreto, não existe ou invalido!",
        );
        this.responseBuilder.build(res);
        return;
      }

      await this.localizacaoBusiness.obterLocalizacaoPorParametros(
        exame.toString(),
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
