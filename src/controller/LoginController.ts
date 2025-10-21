import { Request, Response } from "express";
import { LoginBusiness } from "../business/LoginBusiness";
import { ResponseBuilder } from "../ResponseBuilder";
import { localizacaoAPIretorno } from "../types/tiposRetorno";

export class LoginController {
  private loginBusiness = new LoginBusiness();
  private responseBuilder = new ResponseBuilder<localizacaoAPIretorno>();

  fazerLogin = async (req: Request, res: Response) => {
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        const msg_err = `Senha ou Nome do admin esta faltando ou incorreto para fazer login`;
        this.responseBuilder.adicionarMensagem(msg_err);
        this.responseBuilder.adicionarCodigoStatus(
          this.responseBuilder.STATUS_CODE_BAD_REQUEST,
        );

        this.responseBuilder.build(res);

        return;
      }

      if (email.trim().length <= 0 || senha.trim().length <= 0) {
        const msg_err = `Senha ou Nome do admin esta vazio ou com apenas espaços`;
        this.responseBuilder.adicionarMensagem(msg_err);
        this.responseBuilder.adicionarCodigoStatus(
          this.responseBuilder.STATUS_CODE_BAD_REQUEST,
        );

        this.responseBuilder.build(res);

        return;
      }

      await this.loginBusiness.verificarLoginParametros(
        this.responseBuilder,
        email,
        senha,
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
