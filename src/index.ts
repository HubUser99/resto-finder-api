import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getPort } from "utils/environment";
import routes from "routes";

dotenv.config();

export const app = express();

const port = getPort();

app.use(cors());
app.use(routes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
