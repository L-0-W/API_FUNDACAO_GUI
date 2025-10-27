import express from "express";
import { VagasController } from "../controller/VagasController";

export const vagasRouter = express.Router();
const vagasController = new VagasController();

vagasRouter.get("/", vagasController.buscarTodasVagas);
vagasRouter.get("/:id", vagasController.buscarVagaPorId);
