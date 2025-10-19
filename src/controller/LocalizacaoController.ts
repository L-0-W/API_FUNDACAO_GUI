import { Request, Response } from "express";
import { LocalizacaoBusiness } from "../business/LocalizacaoBusiness";
import { ResponseBuilder } from "../ResponseBuilder";
import jwt from "jsonwebtoken";

export class LocalizacaoController {
  private localizacaoBusiness = new LocalizacaoBusiness();
  private responseBuilder = new ResponseBuilder();

  pegarLocalizacao = async (req: Request, res: Response) => {
    try {
      const { exame, setor, bloco } = req.query;

      console.log(`Entrou em Controller, Verificando se Parametro Existe`);

      console.log(exame);

      if (!exame) {
        this.responseBuilder.adicionarCodigoStatus(
          this.responseBuilder.STATUS_CODE_BAD_REQUEST,
        );

        const msg_err = `Solitação feita sem o parametro 'exame'`;
        this.responseBuilder.adicionarMensagem(msg_err);

        this.responseBuilder.build(res);
        return;
      }

      await this.localizacaoBusiness.pegarLocalizacao(
        exame as string | number,
        //setor as string | number,
        //bloco as string | number,
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

  deletarLocalizacao = async (req: Request, res: Response) => {
    try {
      const admin_jwt = req.headers.authorization?.split("Bearer ")[1];

      console.log(req.query.exame);

      if (!admin_jwt) {
        this.responseBuilder.adicionarCodigoStatus(
          this.responseBuilder.STATUS_CODE_NAO_AUTORIZADO,
        );

        this.responseBuilder.adicionarMensagem("Faltando token de Autorização");
        this.responseBuilder.build(res);

        return;
      }

      const jwt_check_retorno = jwt.verify(
        admin_jwt,
        process.env.JWT_SECRET as string,
        (err: any, req: any) => {
          if (err) {
            this.responseBuilder.adicionarCodigoStatus(
              this.responseBuilder.STATUS_CODE_NAO_AUTORIZADO,
            );
            this.responseBuilder.adicionarMensagem("Erro, Token invalido!");

            this.responseBuilder.build(res);
          }

          this.responseBuilder.adicionarCodigoStatus(
            this.responseBuilder.STATUS_CODE_OK,
          );

          this.responseBuilder.adicionarMensagem(
            "Token valido, fazendo deleção!",
          );

          this.responseBuilder.build(res);
        },
      );
    } catch (err: any) {
      this.responseBuilder.adicionarCodigoStatus(
        this.responseBuilder.STATUS_CODE_SERVER_ERROR,
      );
      this.responseBuilder.adicionarMensagem(err.sqlMessage || err.message);
    }
  };
}
