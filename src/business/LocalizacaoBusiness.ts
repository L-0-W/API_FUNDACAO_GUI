import { ResponseBuilder } from "../ResponseBuilder";
import { LocalizacaoData } from "../data/LocalizacaoData";
import { examesAPIretorno } from "../types/tiposRetorno";

export class NoticiaisBusiness {
  private localizacaoData = new LocalizacaoData();

  obterLocalizacaoPorParametros = async (
    exame: string,
    responseBuilder: ResponseBuilder<examesAPIretorno>,
  ) => {
    try {
      const exameFormatado = exame.toLocaleLowerCase().trimStart().trimEnd();

      if (!exameFormatado || exameFormatado.length === 0) {
        responseBuilder.adicionarCodigoStatus(
          responseBuilder.STATUS_CODE_ERRO_SEMANTICO,
        );
        responseBuilder.adicionarMensagem(
          "Erro ao formatar parametro 'exame', certifique-se que exame esta preenchido.",
        );

        return;
      }

      const exames =
        await this.localizacaoData.buscarLocalizacaoPorParametros(
          exameFormatado,
        );

      if (!exames || exame.length == 0) {
        responseBuilder.adicionarCodigoStatus(
          responseBuilder.STATUS_CODE_VAZIO,
        );

        responseBuilder.adicionarMensagem(
          "Não existe nehum setor/bloco com esse exame!",
        );

        return;
      }

      responseBuilder.adicionarCodigoStatus(responseBuilder.STATUS_CODE_OK);
      responseBuilder.adicionarBody({ exame: exames });

      return;
    } catch (err: any) {
      throw new Error(err);
    }
  };
}
