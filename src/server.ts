import { app } from "./app";
import { localizacaoRouter } from "./router/localizacaoRouter";

app.use("/localizacao", localizacaoRouter);
