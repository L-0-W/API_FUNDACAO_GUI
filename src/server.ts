import { Request, Response } from "express";
import { app } from "./app";
import { localizacaoRouter } from "./router/localizacaoRouter";
import { loginRouter } from "./router/loginRouter";

app.use("/localizacao", localizacaoRouter);
app.use("/loginAdmin", loginRouter);
