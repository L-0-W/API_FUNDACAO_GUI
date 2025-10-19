import { LocalizacaoData } from "../data/LocalizacaoData";
import { ResponseBuilder } from "../ResponseBuilder";

export class LocalizacaoBusiness {
  localizacaoData = new LocalizacaoData();

  pegarLocalizacao = async (
    exame_param: number | string,
    //setor_param: number | string,
    //bloco_param: number | string,
    responseBuilder: ResponseBuilder,
  ) => {
    try {
      if (!isNaN(Number(exame_param))) {
        const exame_id = Number(exame_param);
        const exame = await this.localizacaoData.pegarExamePorID(exame_id);

        if (!exame) {
          responseBuilder.adicionarCodigoStatus(
            responseBuilder.STATUS_CODE_VAZIO,
          );

          const msg_err = `Erro ao buscar exame de ${exame_id}, resposta retornou vazio.`;
          responseBuilder.adicionarMensagem(msg_err);
          return;
        }

        responseBuilder.adicionarExame(exame);
        responseBuilder.adicionarCodigoStatus(responseBuilder.STATUS_CODE_OK);

        return;
      }

      if (isNaN(Number(exame_param))) {
        const exame_str: string = exame_param.toString();
        const exame = await this.localizacaoData.pegarExamePorNome(exame_str);

        if (!exame || exame.length == 0) {
          responseBuilder.adicionarCodigoStatus(
            responseBuilder.STATUS_CODE_VAZIO,
          );

          const msg_err = `Erro ao buscar exame de ${exame_str}, resposta retornou vazio.`;
          responseBuilder.adicionarMensagem(msg_err);
          return;
        }

        responseBuilder.adicionarExames(exame);
        responseBuilder.adicionarCodigoStatus(responseBuilder.STATUS_CODE_OK);

        return;
      }
    } catch (err: any) {
      throw new Error(err);
    }
  };
}
