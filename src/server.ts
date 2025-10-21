import { Request, Response } from "express";
import { app } from "./app";

import { localizacaoRouter } from "./router/localizacaoRouter";
import { loginRouter } from "./router/loginRouter";
import { adminRouter } from "./router/adminRouter";
import { noticiasRouter } from "./router/noticiasRouter";

app.use("/localizacao", localizacaoRouter);
app.use("/noticias", noticiasRouter);

app.use("/loginAdmin", loginRouter);
app.use("/adminAcao", adminRouter);
