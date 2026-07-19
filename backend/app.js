const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./db");
db();
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Radhe Radhe jai shree krisshn");
});

app.listen(PORT, () => {
  console.log(`server is successfully running on portNo. ${PORT}`);
});
