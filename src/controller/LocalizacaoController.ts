import { Request, Response } from "express";
import { LocalizacaoBusiness } from "../business/LocalizacaoBusiness";
import { ResponseBuilder } from "../ResponseBuilder";
import { localizacaoAPIretorno } from "../types/tiposRetorno";

import jwt from "jsonwebtoken";

export class LocalizacaoController {
  private localizacaoBusiness = new LocalizacaoBusiness();
  private responseBuilder = new ResponseBuilder<localizacaoAPIretorno>();
}
