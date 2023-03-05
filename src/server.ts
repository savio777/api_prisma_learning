import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(4003, () => console.log("server is running in 4003"));
