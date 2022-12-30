import * as dotenv from "dotenv";
import express from "express";

import user from "./routes/route.users.js";

dotenv.config();

const app = express();

app.get("/test", (req, res) => {
  res.status(200).json({ msg: "Backend running!" });
});

app.use("/user", user);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Running at ${port}`);
});
