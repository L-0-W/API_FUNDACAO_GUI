import { Request, Response } from "express";
import { LocalizacaoBusiness } from "../business/LocalizacaoBusiness";
import { ResponseBuilder } from "../ResponseBuilder";

export class LocalizacaoController {
  localizacaoBusiness = new LocalizacaoBusiness();
  responseBuilder = new ResponseBuilder();

  pegarLocalizacao = (req: Request, res: Response) => {
    const { exame, setor, bloco } = req.query;

    if (!exame) {
      this.responseBuilder.adicionarCodigoStatus(
        this.responseBuilder.STATUS_CODE_BAD_REQUEST,
      );

      const msg_err = `Solitação feita sem o parametro 'exame'`;
      this.responseBuilder.adicionarMensagem(msg_err);

      this.responseBuilder.build(res);
      return;
    }

    this.localizacaoBusiness.pegarLocalizacao(
      exame as string | number,
      //setor as string | number,
      //bloco as string | number,
      this.responseBuilder,
    );

    this.responseBuilder.build(res);
  };
}
