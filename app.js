import express from "express";
import * as dotenv from "dotenv";
import { pool } from "./db.config.js";

dotenv.config();

const app = express();

console.log(pool);

app.get("/test", (req, res) => {
  res.send("test endpoint");
});

const port = process.env.PORT;

// app.listen(port, () => {
//   console.log(`Running at ${port}`);
// });
