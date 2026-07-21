const express = require("express");
const forgotPass = require("../controlers/forogot_pass");

const router = express.Router();

router.post("/forgot-pass", forgotPass);

module.exports = router;
