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
const loginRoute = require("./routes/loginRoute");
const forgotPass = require("./routes/forgetPassword");
// call route

app.use("/", signupRoute);
app.use("/", loginRoute);
app.use("/", forgotPass);
app.listen(PORT, () => {
  console.log(`server is successfully running on portNo. ${PORT}`);
});
