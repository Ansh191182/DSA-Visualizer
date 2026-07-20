const express = require("express");
const router = express.Router();
const loginLogic = require("../controlers/loginControl");

router.post("/login", loginLogic);

module.exports = router;
