import * as dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.get("/test", (req, res) => {
  res.send("test endpoint");
});

const port = process.env.PORT;

// app.listen(port, () => {
//   console.log(`Running at ${port}`);
// });
