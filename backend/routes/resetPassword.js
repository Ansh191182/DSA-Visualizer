const express = require("express");
const router = express.Router();
const resetPass = require("../controlers/reset_passwordControler");
router.post("/reset_password/:token", resetPass);

module.exports = router;
