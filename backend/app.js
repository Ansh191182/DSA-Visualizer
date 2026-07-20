const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./db");
db();
const app = express();

const PORT = process.env.PORT;

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Radhe Radhe jai shree krisshn");
});

// routes
const signupRoute = require("./routes/signupRoute");

// call route

app.use("/", signupRoute);
app.listen(PORT, () => {
  console.log(`server is successfully running on portNo. ${PORT}`);
});
