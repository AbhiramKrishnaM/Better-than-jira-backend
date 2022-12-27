import * as dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.get("/test", (req, res) => {
  res.status(200).json("Test Endpoint");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Running at ${port}`);
});
