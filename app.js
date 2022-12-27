import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/test", (req, res) => {
  res.send("test endpoint");
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Running at ${port}`);
});