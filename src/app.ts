import express from "express";
import cors from "cors";

export const app = express();

app.use(cors());
app.use(express.json);

const PORT: number = 3003;
const PATH: string = `http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log(`Ouvindo no caminho: ${PATH}`);
});
