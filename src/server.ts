import { Request, Response } from "express";
import { app } from "./app";

import { loginRouter } from "./router/loginRouter";
import { adminRouter } from "./router/adminRouter";
import { noticiasRouter } from "./router/noticiasRouter";
import { vagasRouter } from "./router/vagasRouter";
import { localizacaoRouter } from "./router/localizacaoRouter";

app.use("/noticias", noticiasRouter);
app.use("/vagas", vagasRouter);
app.use("/loginAdmin", loginRouter);
app.use("/adminAcao", adminRouter);
app.use("/localizacao", localizacaoRouter);
