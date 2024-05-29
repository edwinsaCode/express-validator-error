import express, { Application, json } from "express";
import cors from "cors";
import service from "./service";
import { Synchronize } from "./config/synchronize";

const app: Application = express();
const port: number = 8082;

app.use(json());
app.use(cors());
app.use(service);

app.listen(port, async () => {
  try {
    await Synchronize();
    console.log(`run on port ${port}`);
  } catch (err) {
    console.log(err);
  }
});
