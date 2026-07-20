const express = require("express");
const forgotPass = require("../controlers/forogot_pass");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/forgot-pass", authMiddleware, forgotPass);


module.exports = router;
