import express from "express";
import { LocalizacaoController } from "../controller/LocalizacaoController";

const localizacaoController = new LocalizacaoController();

export const localizacaoRouter = express.Router();

localizacaoRouter.get("/", localizacaoController.pegarLocalizacao);
